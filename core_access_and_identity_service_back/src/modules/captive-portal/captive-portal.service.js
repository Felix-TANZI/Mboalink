const crypto = require('crypto');
const dgram = require('dgram');

const prisma = require('../../config/prisma');
const logger = require('../../config/logger');

const RADIUS_HOST = process.env.RADIUS_HOST || 'freeradius';
const RADIUS_PORT = Number(process.env.RADIUS_PORT || 1812);
const RADIUS_SECRET = process.env.RADIUS_SECRET || 'testing123';
const RADIUS_TIMEOUT_MS = Number(process.env.RADIUS_TIMEOUT_MS || 5000);
const SKIP_RADIUS_AUTH = process.env.CAPTIVE_PORTAL_SKIP_RADIUS === 'true'
  || process.env.NODE_ENV === 'test';

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

function normalizeText(value) {
  return String(value || '').trim();
}

function normalizeComparable(value) {
  return normalizeText(value)
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-zA-Z0-9]+/g, ' ')
    .trim()
    .toLowerCase();
}

function roomMatches(room, roomNumber) {
  const expected = normalizeComparable(roomNumber);
  if (!expected) return false;
  return [room?.name, room?.type]
    .map(normalizeComparable)
    .some((candidate) => candidate === expected);
}

function clientNameMatches(passClientName, clientName) {
  const expected = normalizeComparable(clientName);
  if (!expected) return true;

  const actual = normalizeComparable(passClientName);
  if (!actual) return false;
  if (actual.includes(expected) || expected.includes(actual)) return true;

  const expectedTokens = expected.split(/\s+/).filter(Boolean);
  return expectedTokens.every((token) => actual.includes(token));
}

function guestPassIsUsable(pass) {
  if (!pass || pass.isRevoked) return false;
  if (pass.expiryAt && new Date(pass.expiryAt) <= new Date()) return false;
  if (pass.maxUses > 0 && pass.uses >= pass.maxUses) return false;
  return true;
}

async function authenticateCaptivePortal(payload) {
  const code = normalizeCode(payload.code);
  const uuid = normalizeText(payload.uuid);
  const clientName = normalizeText(payload.clientName);
  const roomNumber = normalizeText(payload.roomNumber);
  const hotelId = normalizeText(payload.hotelId);
  const now = new Date();
  const include = {
    hotel: { select: { id: true, name: true } },
    room: { select: { id: true, name: true, type: true } },
  };

  let pass = null;

  if (uuid) {
    const matches = await prisma.guestPass.findMany({
      where: {
        OR: [
          { id: uuid },
          { code: normalizeCode(uuid) },
        ],
      },
      include,
      take: 1,
    });
    [pass] = matches;
  }

  if (!pass && code) {
    pass = await prisma.guestPass.findUnique({
      where: { code },
      include,
    });
  }

  if (!pass && roomNumber) {
    const candidates = await prisma.guestPass.findMany({
      where: {
        hotelId: hotelId || undefined,
        isRevoked: false,
        OR: [
          { expiryAt: null },
          { expiryAt: { gt: now } },
        ],
        roomId: { not: null },
      },
      include,
      orderBy: { createdAt: 'desc' },
      take: 50,
    });
    pass = candidates.find((candidate) => (
      roomMatches(candidate.room, roomNumber)
      && clientNameMatches(candidate.clientName, clientName)
    )) || null;
  }

  if (!guestPassIsUsable(pass)) {
    const err = new Error('Code Wi-Fi invalide, expiré ou révoqué.');
    err.status = 401;
    throw err;
  }

  let radiusCode;
  try {
    radiusCode = SKIP_RADIUS_AUTH
      ? RADIUS_CODE.ACCESS_ACCEPT
      : await sendRadiusAccessRequest(pass.code, pass.code);
  } catch (error) {
    const err = new Error('Service RADIUS indisponible. Réessayez ou activez le mode test du portail captif.');
    err.status = 503;
    err.cause = error;
    throw err;
  }
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

async function getCaptiveHotel(hotelId) {
  const where = hotelId
    ? { id: hotelId }
    : { status: 'ACTIVE' };

  const hotel = await prisma.hotel.findFirst({
    where,
    select: {
      id: true,
      name: true,
      city: true,
      country: true,
      address: true,
      phone: true,
      website: true,
      description: true,
      latitude: true,
      longitude: true,
      amenities: true,
      photos: true,
      wifiConfig: {
        select: {
          ssid: true,
          captivePortal: true,
        },
      },
    },
    orderBy: { createdAt: 'desc' },
  });

  if (!hotel) {
    const err = new Error('Hotel not found');
    err.status = 404;
    throw err;
  }

  return hotel;
}

module.exports = {
  authenticateCaptivePortal,
  getCaptiveHotel,
};
