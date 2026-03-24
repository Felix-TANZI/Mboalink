const prisma = require('../../config/prisma');
const { writeAuditLog } = require('../audit-logs/audit-log.service');

async function listWifiConfigs(query) {
  const where = {
    hotelId: query.hotelId || undefined,
    status: query.status || undefined,
    OR: query.search ? [
      { ssid: { contains: query.search, mode: 'insensitive' } },
      { hotel: { name: { contains: query.search, mode: 'insensitive' } } },
    ] : undefined,
  };

  return prisma.wifiConfig.findMany({
    where,
    include: {
      hotel: { select: { id: true, name: true } },
    },
    orderBy: { updatedAt: 'desc' },
  });
}

async function getWifiConfigByHotelId(hotelId) {
  const config = await prisma.wifiConfig.findUnique({
    where: { hotelId },
    include: {
      hotel: { select: { id: true, name: true } },
    },
  });

  return config;
}

async function upsertWifiConfig(hotelId, data, reqMeta) {
  const hotel = await prisma.hotel.findUnique({ where: { id: hotelId } });
  if (!hotel) {
    const err = new Error('Hotel not found');
    err.status = 404;
    throw err;
  }

  const config = await prisma.wifiConfig.upsert({
    where: { hotelId },
    update: {
      ...data,
      lastModifiedBy: reqMeta.actorName,
      zones: data.zones || [],
      captivePortal: data.captivePortal || {},
    },
    create: {
      hotelId,
      ...data,
      lastModifiedBy: reqMeta.actorName,
      zones: data.zones || [],
      captivePortal: data.captivePortal || {},
    },
    include: {
      hotel: { select: { id: true, name: true } },
    },
  });

  await writeAuditLog({
    requestId: reqMeta.requestId,
    eventType: 'wifi.config',
    entityType: 'wifi_config',
    entityId: config.id,
    action: 'upsert',
    actorUserId: reqMeta.actorUserId,
    hotelId,
    payload: {
      authMethod: config.authMethod,
      ssid: config.ssid,
      status: config.status,
      maxDevices: config.maxDevices,
    },
  });

  return config;
}

module.exports = {
  listWifiConfigs,
  getWifiConfigByHotelId,
  upsertWifiConfig,
};
