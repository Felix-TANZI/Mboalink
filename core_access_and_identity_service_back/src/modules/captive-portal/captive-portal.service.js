const crypto = require('crypto');
const dgram = require('dgram');

const prisma = require('../../config/prisma');
const logger = require('../../config/logger');

const RADIUS_HOST = process.env.RADIUS_HOST || 'freeradius';
const RADIUS_PORT = Number(process.env.RADIUS_PORT || 1812);
const RADIUS_SECRET = process.env.RADIUS_SECRET || 'testing123';
const RADIUS_TIMEOUT_MS = Number(process.env.RADIUS_TIMEOUT_MS || 5000);

const RADIUS_CODE = {
  ACCESS_REQUEST: 1,
  ACCESS_ACCEPT: 2,
  ACCESS_REJECT: 3,
};

const RADIUS_ATTR = {
  USER_NAME: 1,
  USER_PASSWORD: 2,
  NAS_IP_ADDRESS: 4,
  NAS_PORT: 5,
};

function encryptPassword(password, secret, authenticator) {
  const pass = Buffer.from(password, 'utf8');
  const padded = Buffer.alloc(Math.ceil(pass.length / 16) * 16, 0);
  pass.copy(padded);

  const result = [];
  let previous = authenticator;

  for (let i = 0; i < padded.length; i += 16) {
    const hash = crypto.createHash('md5').update(secret).update(previous).digest();
    const chunk = Buffer.alloc(16);
    for (let j = 0; j < 16; j += 1) {
      chunk[j] = padded[i + j] ^ hash[j];
    }
    result.push(chunk);
    previous = chunk;
  }

  return Buffer.concat(result);
}

function buildAccessRequest(username, password) {
  const identifier = Math.floor(Math.random() * 256);
  const authenticator = crypto.randomBytes(16);
  const encPass = encryptPassword(password, RADIUS_SECRET, authenticator);

  const usernameBuf = Buffer.from(username, 'utf8');
  const nasIpBuf = Buffer.from([127, 0, 0, 1]);

  const attrs = Buffer.concat([
    Buffer.concat([Buffer.from([RADIUS_ATTR.USER_NAME, usernameBuf.length + 2]), usernameBuf]),
    Buffer.concat([Buffer.from([RADIUS_ATTR.USER_PASSWORD, encPass.length + 2]), encPass]),
    Buffer.concat([Buffer.from([RADIUS_ATTR.NAS_IP_ADDRESS, 6]), nasIpBuf]),
    Buffer.from([RADIUS_ATTR.NAS_PORT, 6, 0, 0, 0, 0]),
  ]);

  const header = Buffer.alloc(20);
  header[0] = RADIUS_CODE.ACCESS_REQUEST;
  header[1] = identifier & 0xff;
  header.writeUInt16BE(20 + attrs.length, 2);
  authenticator.copy(header, 4);

  return Buffer.concat([header, attrs]);
}

function sendRadiusAccessRequest(username, password) {
  return new Promise((resolve, reject) => {
    const socket = dgram.createSocket('udp4');
    let done = false;

    function cleanup() {
      if (!done) {
        done = true;
        socket.close();
      }
    }

    const timer = setTimeout(() => {
      cleanup();
      reject(new Error(`Timeout RADIUS (${RADIUS_TIMEOUT_MS}ms)`));
    }, RADIUS_TIMEOUT_MS);

    socket.on('message', (message) => {
      clearTimeout(timer);
      cleanup();
      resolve(message[0]);
    });

    socket.on('error', (error) => {
      clearTimeout(timer);
      cleanup();
      reject(error);
    });

    socket.send(buildAccessRequest(username, password), RADIUS_PORT, RADIUS_HOST, (error) => {
      if (error) {
        clearTimeout(timer);
        cleanup();
        logger.error({
          radiusHost: RADIUS_HOST,
          radiusPort: RADIUS_PORT,
          error: {
            code: error.code,
            message: error.message,
          },
        }, 'RADIUS request failed');
        reject(error);
      }
    });
  });
}

function normalizeCode(code) {
  return String(code || '').trim().toUpperCase();
}

function guestPassIsUsable(pass) {
  if (!pass || pass.isRevoked) return false;
  if (pass.expiryAt && new Date(pass.expiryAt) <= new Date()) return false;
  if (pass.maxUses > 0 && pass.uses >= pass.maxUses) return false;
  return true;
}

async function authenticateCaptivePortal(payload) {
  const code = normalizeCode(payload.code);

  let pass = await prisma.guestPass.findUnique({
    where: { code },
    include: {
      hotel: { select: { id: true, name: true } },
      room: { select: { id: true, name: true, type: true } },
    },
  });

  if (!pass) {
    pass = await prisma.guestPass.findFirst({
      where: {
        isRevoked: false,
        expiryAt: { gt: new Date() },
        room: {
          name: { equals: code, mode: 'insensitive' },
        },
      },
      include: {
        hotel: { select: { id: true, name: true } },
        room: { select: { id: true, name: true, type: true } },
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  if (!guestPassIsUsable(pass)) {
    const err = new Error('Code Wi-Fi invalide, expiré ou révoqué.');
    err.status = 401;
    throw err;
  }

  const radiusCode = await sendRadiusAccessRequest(pass.code, pass.code);
  if (radiusCode !== RADIUS_CODE.ACCESS_ACCEPT) {
    const err = new Error('Authentification RADIUS refusée.');
    err.status = 401;
    throw err;
  }

  const session = await prisma.$transaction(async (tx) => {
    await tx.guestPass.update({
      where: { id: pass.id },
      data: { uses: { increment: 1 } },
    });

    return tx.loginSession.create({
      data: {
        hotelId: pass.hotelId,
        roomId: pass.roomId,
        guestPassId: pass.id,
        clientName: pass.clientName || null,
        ipAddress: payload.ipAddress || null,
        macAddress: payload.macAddress || null,
        status: 'ONLINE',
        startedAt: new Date(),
        endedAt: pass.expiryAt || null,
        capDownKbps: pass.downloadCapKbps,
        capUpKbps: pass.uploadCapKbps,
        type: 'Guest Pass',
      },
    });
  });

  return {
    accepted: true,
    code: pass.code,
    hotel: pass.hotel,
    room: pass.room,
    clientName: pass.clientName,
    session,
  };
}

module.exports = {
  authenticateCaptivePortal,
};
