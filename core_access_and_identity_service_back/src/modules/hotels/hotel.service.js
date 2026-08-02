const prisma = require('../../config/prisma');
const { writeAuditLog } = require('../audit-logs/audit-log.service');
const { allocateCaptivePortalPort, buildCaptivePortalUrl } = require('./captive-portal-port.service');
const { ensureDefaultCaptivePortal, withPortalUrl } = require('../captive-portal-instances/captive-portal-instance.service');

function ensureReceptionistHotel(user) {
  if (user?.role !== 'RECEPTIONIST' && user?.role !== 'HOTEL_IT') return null;
  if (!user.hotelId) {
    const err = new Error('Receptionist account is not linked to a hotel');
    err.status = 403;
    throw err;
  }
  return user.hotelId;
}

async function listHotels(query, user) {
  const search = query.search?.trim();
  const scopedHotelId = ensureReceptionistHotel(user);

  const hotels = await prisma.hotel.findMany({
    where: {
      id: scopedHotelId || undefined,
      OR: search ? [
          { name: { contains: search, mode: 'insensitive' } },
          { city: { contains: search, mode: 'insensitive' } },
          { country: { contains: search, mode: 'insensitive' } },
        ] : undefined,
    },
    include: {
      _count: { select: { rooms: true, captivePortals: true } },
      wifiConfig: { select: { ssid: true } },
      captivePortals: { orderBy: [{ isDefault: 'desc' }, { createdAt: 'asc' }] },
    },
    orderBy: { createdAt: 'desc' },
  });

  return hotels.map(withCaptivePortalAccess);
}

async function getHotelById(hotelId, user) {
  const scopedHotelId = ensureReceptionistHotel(user);
  if (scopedHotelId && scopedHotelId !== hotelId) {
    const err = new Error('Receptionist cannot access another hotel');
    err.status = 403;
    throw err;
  }

  const hotel = await prisma.hotel.findUnique({
    where: { id: hotelId },
    include: {
      rooms: true,
      wifiConfig: true,
      captivePortals: { orderBy: [{ isDefault: 'desc' }, { createdAt: 'asc' }] },
      _count: { select: { rooms: true, devices: true, captivePortals: true } },
    },
  });

  if (!hotel) {
    const err = new Error('Hotel not found');
    err.status = 404;
    throw err;
  }

  return withCaptivePortalAccess(hotel);
}

function withCaptivePortalAccess(hotel) {
  const portals = Array.isArray(hotel.captivePortals)
    ? hotel.captivePortals.map(withPortalUrl)
    : [];
  const defaultPortal = portals.find((portal) => portal.isDefault) || portals[0] || null;
  const ssid = defaultPortal?.ssid || hotel.wifiConfig?.ssid;
  const port = defaultPortal?.port || hotel.captivePortalPort;

  return {
    ...hotel,
    captivePortals: portals,
    captivePortalCount: hotel._count?.captivePortals ?? portals.length,
    captivePortalPort: port || null,
    captivePortalUrl: defaultPortal?.captivePortalUrl || buildCaptivePortalUrl(port, {
      hotelId: hotel.id,
      ssid,
    }),
  };
}

async function createHotel(data, reqMeta) {
  const captivePortalPort = await allocateCaptivePortalPort(data.captivePortalPort);
  const { captivePortalPort: _ignoredPort, ...hotelData } = data;

  const hotel = await prisma.hotel.create({
    data: {
      ...hotelData,
      captivePortalPort,
      amenities: data.amenities || [],
      photos: data.photos || [],
    },
  });

  await writeAuditLog({
    requestId: reqMeta.requestId,
    eventType: 'hotel.lifecycle',
    entityType: 'hotel',
    entityId: hotel.id,
    action: 'create',
    actorUserId: reqMeta.actorUserId,
    hotelId: hotel.id,
    payload: { name: hotel.name, city: hotel.city, status: hotel.status, captivePortalPort: hotel.captivePortalPort },
  });

  await prisma.guestConfig.create({
    data: {
      hotelId: hotel.id,
    },
  });

  await ensureDefaultCaptivePortal(hotel.id, { name: 'Client' });

  return getHotelById(hotel.id);
}

async function updateHotel(hotelId, data, reqMeta) {
  if (reqMeta.actorRole === 'HOTEL_IT') {
    if (!reqMeta.actorHotelId || reqMeta.actorHotelId !== hotelId) {
      const err = new Error('Hotel IT cannot update another hotel');
      err.status = 403;
      throw err;
    }
  }

  await getHotelById(hotelId);

  const { captivePortalPort, ...hotelData } = data;
  const nextData = { ...hotelData };

  if (captivePortalPort !== undefined) {
    const current = await prisma.hotel.findUnique({
      where: { id: hotelId },
      select: { captivePortalPort: true },
    });

    if (Number(captivePortalPort) !== current?.captivePortalPort) {
      nextData.captivePortalPort = await allocateCaptivePortalPort(captivePortalPort);
    }
  }

  const hotel = await prisma.hotel.update({
    where: { id: hotelId },
    data: nextData,
  });

  await writeAuditLog({
    requestId: reqMeta.requestId,
    eventType: 'hotel.lifecycle',
    entityType: 'hotel',
    entityId: hotel.id,
    action: 'update',
    actorUserId: reqMeta.actorUserId,
    hotelId: hotel.id,
    payload: nextData,
  });

  return withCaptivePortalAccess(hotel);
}

async function deleteHotel(hotelId, reqMeta) {
  const hotel = await getHotelById(hotelId);

  await prisma.hotel.delete({ where: { id: hotelId } });

  await writeAuditLog({
    requestId: reqMeta.requestId,
    eventType: 'hotel.lifecycle',
    entityType: 'hotel',
    entityId: hotel.id,
    action: 'delete',
    actorUserId: reqMeta.actorUserId,
    hotelId: hotel.id,
    payload: { name: hotel.name },
    severity: 'WARNING',
  });
}

module.exports = {
  listHotels,
  getHotelById,
  createHotel,
  updateHotel,
  deleteHotel,
};
