const prisma = require('../../config/prisma');
const { writeAuditLog } = require('../audit-logs/audit-log.service');

async function listHotels(query) {
  const search = query.search?.trim();

  return prisma.hotel.findMany({
    where: search ? {
      OR: [
        { name: { contains: search, mode: 'insensitive' } },
        { city: { contains: search, mode: 'insensitive' } },
        { country: { contains: search, mode: 'insensitive' } },
      ],
    } : undefined,
    include: {
      _count: { select: { rooms: true } },
    },
    orderBy: { createdAt: 'desc' },
  });
}

async function getHotelById(hotelId) {
  const hotel = await prisma.hotel.findUnique({
    where: { id: hotelId },
    include: {
      rooms: true,
      wifiConfig: true,
      _count: { select: { rooms: true, devices: true } },
    },
  });

  if (!hotel) {
    const err = new Error('Hotel not found');
    err.status = 404;
    throw err;
  }

  return hotel;
}

async function createHotel(data, reqMeta) {
  const hotel = await prisma.hotel.create({
    data: {
      ...data,
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
    payload: { name: hotel.name, city: hotel.city, status: hotel.status },
  });

  await prisma.guestConfig.create({
    data: {
      hotelId: hotel.id,
    },
  });

  return hotel;
}

async function updateHotel(hotelId, data, reqMeta) {
  await getHotelById(hotelId);

  const hotel = await prisma.hotel.update({
    where: { id: hotelId },
    data,
  });

  await writeAuditLog({
    requestId: reqMeta.requestId,
    eventType: 'hotel.lifecycle',
    entityType: 'hotel',
    entityId: hotel.id,
    action: 'update',
    actorUserId: reqMeta.actorUserId,
    hotelId: hotel.id,
    payload: data,
  });

  return hotel;
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
