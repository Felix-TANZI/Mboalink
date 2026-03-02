const prisma = require('../../config/prisma');
const { writeAuditLog } = require('../audit-logs/audit-log.service');

async function listLoginSessions(query) {
  const where = {
    hotelId: query.hotelId || undefined,
    status: query.status || undefined,
    OR: query.search ? [
      { clientName: { contains: query.search, mode: 'insensitive' } },
      { ipAddress: { contains: query.search, mode: 'insensitive' } },
      { macAddress: { contains: query.search, mode: 'insensitive' } },
      { type: { contains: query.search, mode: 'insensitive' } },
      { room: { type: { contains: query.search, mode: 'insensitive' } } },
    ] : undefined,
  };

  return prisma.loginSession.findMany({
    where,
    include: {
      hotel: { select: { id: true, name: true } },
      room: { select: { id: true, type: true, name: true } },
      guestPass: { select: { id: true, code: true, label: true } },
    },
    orderBy: { createdAt: 'desc' },
  });
}

async function createManualLogin(payload, reqMeta) {
  const room = await prisma.room.findUnique({ where: { id: payload.roomId } });
  if (!room || room.hotelId !== payload.hotelId) {
    const err = new Error('Room not found in selected hotel');
    err.status = 404;
    throw err;
  }

  let guestPassId;
  if (payload.passCode) {
    const pass = await prisma.guestPass.findFirst({
      where: {
        hotelId: payload.hotelId,
        code: payload.passCode,
        isRevoked: false,
      },
    });

    if (!pass) {
      const err = new Error('Invalid pass code');
      err.status = 400;
      throw err;
    }

    guestPassId = pass.id;
  }

  const session = await prisma.loginSession.create({
    data: {
      hotelId: payload.hotelId,
      roomId: payload.roomId,
      guestPassId,
      clientName: payload.clientName,
      ipAddress: payload.ipAddress,
      macAddress: payload.macAddress,
      status: 'ONLINE',
      startedAt: new Date(),
      type: guestPassId ? 'Guest Pass' : 'Manual Login',
    },
    include: {
      room: { select: { id: true, type: true, name: true } },
      guestPass: { select: { id: true, code: true, label: true } },
    },
  });

  await writeAuditLog({
    requestId: reqMeta.requestId,
    eventType: 'wifi.session',
    entityType: 'login_session',
    entityId: session.id,
    action: 'manual-login',
    actorUserId: reqMeta.actorUserId,
    hotelId: payload.hotelId,
    payload: {
      roomId: payload.roomId,
      passCode: payload.passCode || null,
      clientName: payload.clientName || null,
    },
  });

  return session;
}

async function removeSessions(ids, reqMeta) {
  const sessions = await prisma.loginSession.findMany({ where: { id: { in: ids } } });

  if (sessions.length === 0) {
    return { count: 0 };
  }

  await prisma.loginSession.deleteMany({ where: { id: { in: ids } } });

  await writeAuditLog({
    requestId: reqMeta.requestId,
    eventType: 'wifi.session',
    entityType: 'login_session',
    action: 'bulk-remove',
    actorUserId: reqMeta.actorUserId,
    hotelId: sessions[0].hotelId,
    payload: {
      ids,
      count: sessions.length,
    },
    severity: 'WARNING',
  });

  return { count: sessions.length };
}

module.exports = {
  listLoginSessions,
  createManualLogin,
  removeSessions,
};
