const prisma = require('../../config/prisma');
const { writeAuditLog } = require('../audit-logs/audit-log.service');
const { buildCaptivePortalUrl } = require('../hotels/captive-portal-port.service');

function scopedHotelId(queryHotelId, user) {
  if (user?.role === 'RECEPTIONIST' || user?.role === 'HOTEL_IT') {
    if (!user.hotelId) {
      const err = new Error('Hotel-scoped account is not linked to a hotel');
      err.status = 403;
      throw err;
    }
    return user.hotelId;
  }

  return queryHotelId || undefined;
}

function ensureCanUseHotel(hotelId, reqMetaOrUser) {
  const role = reqMetaOrUser.actorRole || reqMetaOrUser.role;
  const scopedHotel = reqMetaOrUser.actorHotelId || reqMetaOrUser.hotelId;

  if (role !== 'RECEPTIONIST' && role !== 'HOTEL_IT') return;

  if (!scopedHotel || scopedHotel !== hotelId) {
    const err = new Error('Hotel-scoped account cannot access another hotel');
    err.status = 403;
    throw err;
  }
}

function withCaptivePortalAccess(config) {
  return {
    ...config,
    captivePortalPort: config.hotel?.captivePortalPort || null,
    captivePortalUrl: buildCaptivePortalUrl(config.hotel?.captivePortalPort, {
      hotelId: config.hotelId,
      ssid: config.ssid,
    }),
  };
}

async function listWifiConfigs(query, user) {
  const where = {
    hotelId: scopedHotelId(query.hotelId, user),
    status: query.status || undefined,
    OR: query.search ? [
      { ssid: { contains: query.search, mode: 'insensitive' } },
      { hotel: { name: { contains: query.search, mode: 'insensitive' } } },
    ] : undefined,
  };

  const configs = await prisma.wifiConfig.findMany({
    where,
    include: {
      hotel: { select: { id: true, name: true, captivePortalPort: true } },
    },
    orderBy: { updatedAt: 'desc' },
  });

  return configs.map(withCaptivePortalAccess);
}

async function getWifiConfigByHotelId(hotelId, user) {
  ensureCanUseHotel(hotelId, user || {});

  const config = await prisma.wifiConfig.findUnique({
    where: { hotelId },
    include: {
      hotel: { select: { id: true, name: true, captivePortalPort: true } },
    },
  });

  return config ? withCaptivePortalAccess(config) : null;
}

async function upsertWifiConfig(hotelId, data, reqMeta) {
  ensureCanUseHotel(hotelId, reqMeta);

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
      hotel: { select: { id: true, name: true, captivePortalPort: true } },
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

  return withCaptivePortalAccess(config);
}

module.exports = {
  listWifiConfigs,
  getWifiConfigByHotelId,
  upsertWifiConfig,
};
