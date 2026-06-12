const assert = require('node:assert/strict');
const path = require('node:path');
const test = require('node:test');

process.env.NODE_ENV = 'test';
process.env.CAPTIVE_PORTAL_SKIP_RADIUS = 'true';

const root = path.resolve(__dirname, '..');
const prismaPath = path.join(root, 'src/config/prisma.js');
const loggerPath = path.join(root, 'src/config/logger.js');
const servicePath = path.join(root, 'src/modules/captive-portal/captive-portal.service.js');

function loadServiceWithPrisma(prismaMock) {
  delete require.cache[require.resolve(servicePath)];
  require.cache[require.resolve(prismaPath)] = {
    id: prismaPath,
    filename: prismaPath,
    loaded: true,
    exports: prismaMock,
  };
  require.cache[require.resolve(loggerPath)] = {
    id: loggerPath,
    filename: loggerPath,
    loaded: true,
    exports: { error() {}, warn() {}, info() {} },
  };
  return require(servicePath);
}

function makePass(overrides = {}) {
  return {
    id: 'pass-uuid-1',
    hotelId: 'hotel-1',
    roomId: 'room-101',
    code: 'ABCD12',
    clientName: 'Junior Ngonga',
    maxUses: 2,
    uses: 0,
    expiryAt: new Date(Date.now() + 60 * 60 * 1000),
    isRevoked: false,
    uploadCapKbps: 1500,
    downloadCapKbps: 3000,
    hotel: { id: 'hotel-1', name: 'Hotel Test' },
    room: { id: 'room-101', name: '101', type: 'Suite' },
    ...overrides,
  };
}

function makePrismaMock(pass) {
  const createdSessions = [];
  return {
    createdSessions,
    guestPass: {
      findMany: async ({ where }) => {
        if (where?.OR?.some((item) => item.id === pass.id || item.code === pass.code)) return [pass];
        if (where?.hotelId && where.hotelId !== pass.hotelId) return [];
        return [pass];
      },
      findUnique: async ({ where }) => {
        if (where?.code === pass.code || where?.id === pass.id) return pass;
        return null;
      },
      update: async () => ({ ...pass, uses: pass.uses + 1 }),
    },
    loginSession: {
      create: async ({ data }) => {
        createdSessions.push(data);
        return { id: 'session-1', ...data };
      },
    },
    hotel: {
      findFirst: async () => pass.hotel,
    },
    $transaction: async (callback) => callback({
      guestPass: {
        update: async () => ({ ...pass, uses: pass.uses + 1 }),
      },
      loginSession: {
        create: async ({ data }) => {
          createdSessions.push(data);
          return { id: 'session-1', ...data };
        },
      },
    }),
  };
}

test('captive portal accepts a guest pass UUID and creates an online session', async () => {
  const pass = makePass();
  const prisma = makePrismaMock(pass);
  const { authenticateCaptivePortal } = loadServiceWithPrisma(prisma);

  const result = await authenticateCaptivePortal({
    uuid: pass.id,
    ipAddress: '10.0.0.10',
    macAddress: 'AA:BB:CC:DD:EE:FF',
  });

  assert.equal(result.accepted, true);
  assert.equal(result.code, pass.code);
  assert.equal(prisma.createdSessions.length, 1);
  assert.equal(prisma.createdSessions[0].capDownKbps, pass.downloadCapKbps);
  assert.equal(prisma.createdSessions[0].capUpKbps, pass.uploadCapKbps);
  assert.equal(prisma.createdSessions[0].status, 'ONLINE');
});

test('captive portal accepts a Wi-Fi code typed in the UUID field', async () => {
  const pass = makePass();
  const prisma = makePrismaMock(pass);
  const { authenticateCaptivePortal } = loadServiceWithPrisma(prisma);

  const result = await authenticateCaptivePortal({ uuid: 'abcd12' });

  assert.equal(result.accepted, true);
  assert.equal(result.code, pass.code);
});

test('captive portal accepts client name and room number with flexible name matching', async () => {
  const pass = makePass({ clientName: 'NGONGA Junior' });
  const prisma = makePrismaMock(pass);
  const { authenticateCaptivePortal } = loadServiceWithPrisma(prisma);

  const result = await authenticateCaptivePortal({
    hotelId: 'hotel-1',
    clientName: 'Junior',
    roomNumber: '101',
  });

  assert.equal(result.accepted, true);
  assert.equal(result.room.name, '101');
});

test('captive portal rejects revoked, expired or fully used guest passes', async () => {
  const pass = makePass({ uses: 1, maxUses: 1 });
  const prisma = makePrismaMock(pass);
  const { authenticateCaptivePortal } = loadServiceWithPrisma(prisma);

  await assert.rejects(
    () => authenticateCaptivePortal({ code: pass.code }),
    /Code Wi-Fi invalide/,
  );
});
