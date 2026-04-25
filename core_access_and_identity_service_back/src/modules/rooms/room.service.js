const prisma = require('../../config/prisma');
const { writeAuditLog } = require('../audit-logs/audit-log.service');
const { syncRoomToRadius, removeRoomFromRadius } = require('../radius/radius.service');

async function listRooms(query) {
  const where = {
    hotelId: query.hotelId || undefined,
    type: query.type ? { contains: query.type, mode: 'insensitive' } : undefined,
  };

  if (query.search) {
    where.OR = [
      { type: { contains: query.search, mode: 'insensitive' } },
      { description: { contains: query.search, mode: 'insensitive' } },
      { hotel: { name: { contains: query.search, mode: 'insensitive' } } },
    ];
  }

  return prisma.room.findMany({
    where,
    include: {
      hotel: { select: { id: true, name: true } },
    },
    orderBy: { createdAt: 'desc' },
  });
}

async function createRoom(hotelId, data, reqMeta) {
  const hotel = await prisma.hotel.findUnique({ where: { id: hotelId } });
  if (!hotel) {
    const err = new Error('Hotel not found');
    err.status = 404;
    throw err;
  }

  const room = await prisma.room.create({
    data: {
      hotelId,
      ...data,
      equipments: data.equipments || [],
      photos: data.photos || [],
    },
    include: { hotel: { select: { name: true } } },
  });

  await syncRoomToRadius(room.id, reqMeta);

  await writeAuditLog({
    requestId: reqMeta.requestId,
    eventType: 'hotel.room',
    entityType: 'room',
    entityId: room.id,
    action: 'create',
    actorUserId: reqMeta.actorUserId,
    hotelId,
    payload: { type: room.type, capacity: room.capacity },
  });

  return room;
}

async function updateRoom(roomId, data, reqMeta) {
  const existing = await prisma.room.findUnique({ where: { id: roomId } });
  if (!existing) {
    const err = new Error('Room not found');
    err.status = 404;
    throw err;
  }

  const room = await prisma.room.update({
    where: { id: roomId },
    data,
    include: { hotel: { select: { name: true } } },
  });

  await removeRoomFromRadius(existing);
  await syncRoomToRadius(room.id, reqMeta);

  await writeAuditLog({
    requestId: reqMeta.requestId,
    eventType: 'hotel.room',
    entityType: 'room',
    entityId: room.id,
    action: 'update',
    actorUserId: reqMeta.actorUserId,
    hotelId: room.hotelId,
    payload: data,
  });

  return room;
}

async function deleteRoom(roomId, reqMeta) {
  const existing = await prisma.room.findUnique({ where: { id: roomId } });
  if (!existing) {
    const err = new Error('Room not found');
    err.status = 404;
    throw err;
  }

  await prisma.room.delete({ where: { id: roomId } });
  await removeRoomFromRadius(existing);

  await writeAuditLog({
    requestId: reqMeta.requestId,
    eventType: 'hotel.room',
    entityType: 'room',
    entityId: roomId,
    action: 'delete',
    actorUserId: reqMeta.actorUserId,
    hotelId: existing.hotelId,
    payload: { type: existing.type },
    severity: 'WARNING',
  });
}

module.exports = {
  listRooms,
  createRoom,
  updateRoom,
  deleteRoom,
};
