const prisma = require('../../config/prisma');
const { writeAuditLog } = require('../audit-logs/audit-log.service');

async function getGuestConfig(hotelId) {
  const config = await prisma.guestConfig.findUnique({
    where: { hotelId },
  });

  if (!config) {
    const err = new Error('Guest config not found for this hotel');
    err.status = 404;
    throw err;
  }

  return config;
}

async function upsertGuestConfig(data, reqMeta) {
  const hotel = await prisma.hotel.findUnique({ where: { id: data.hotelId } });
  if (!hotel) {
    const err = new Error('Hotel not found');
    err.status = 404;
    throw err;
  }

  const config = await prisma.guestConfig.upsert({
    where: { hotelId: data.hotelId },
    update: {
      ...data,
    },
    create: {
      ...data,
    },
  });

  await writeAuditLog({
    requestId: reqMeta.requestId,
    eventType: 'wifi.global-config',
    entityType: 'guest_config',
    entityId: config.id,
    action: 'upsert',
    actorUserId: reqMeta.actorUserId,
    hotelId: data.hotelId,
    payload: {
      maxPassDurationDays: config.maxPassDurationDays,
      maxCountPass: config.maxCountPass,
      outageModeEnabled: config.outageModeEnabled,
    },
  });

  return config;
}

module.exports = {
  getGuestConfig,
  upsertGuestConfig,
};
