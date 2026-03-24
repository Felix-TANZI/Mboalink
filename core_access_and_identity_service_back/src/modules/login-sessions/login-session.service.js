const prisma = require('../../config/prisma');
const { writeAuditLog } = require('../audit-logs/audit-log.service');

async function listLoginSessions(query) {
  const where = {
    hotelId: query.hotelId || undefined,
    status:  query.status  || undefined,
    OR: query.search ? [
      { clientName: { contains: query.search, mode: 'insensitive' } },
      { ipAddress:  { contains: query.search, mode: 'insensitive' } },
      { macAddress: { contains: query.search, mode: 'insensitive' } },
      { type:       { contains: query.search, mode: 'insensitive' } },
      { room: { type: { contains: query.search, mode: 'insensitive' } } },
    ] : undefined,
  };

  return prisma.loginSession.findMany({
    where,
    include: {
      hotel:     { select: { id: true, name: true } },
      room:      { select: { id: true, type: true, name: true } },
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

  // Vérification cohérence des dates
  const startedAt = new Date(payload.startedAt);
  const endedAt   = new Date(payload.endedAt);
  if (endedAt <= startedAt) {
    const err = new Error('La date de sortie doit être après la date d\'entrée');
    err.status = 400;
    throw err;
  }

  const session = await prisma.loginSession.create({
    data: {
      hotelId:    payload.hotelId,
      roomId:     payload.roomId,
      clientName: payload.clientName,
      ipAddress:  payload.ipAddress,
      macAddress: payload.macAddress,
      status:     'ONLINE',
      startedAt,
      endedAt,
      type: 'Manual Login',
    },
    include: {
      room:      { select: { id: true, type: true, name: true } },
      guestPass: { select: { id: true, code: true, label: true } },
    },
  });

  await writeAuditLog({
    requestId:   reqMeta.requestId,
    eventType:   'wifi.session',
    entityType:  'login_session',
    entityId:    session.id,
    action:      'manual-login',
    actorUserId: reqMeta.actorUserId,
    hotelId:     payload.hotelId,
    payload: {
      roomId:     payload.roomId,
      clientName: payload.clientName || null,
      startedAt:  payload.startedAt,
      endedAt:    payload.endedAt,
    },
  });

  return session;
}

async function updateLoginSession(sessionId, payload, reqMeta) {
  const existing = await prisma.loginSession.findUnique({ where: { id: sessionId } });
  if (!existing) {
    const err = new Error('Session not found');
    err.status = 404;
    throw err;
  }

  // Si on change la chambre, vérifier qu'elle appartient au même hôtel
  if (payload.roomId) {
    const room = await prisma.room.findUnique({ where: { id: payload.roomId } });
    if (!room || room.hotelId !== existing.hotelId) {
      const err = new Error('Room not found in hotel');
      err.status = 404;
      throw err;
    }
  }

  // Vérification cohérence des dates si les deux sont fournies
  const startedAt = payload.startedAt ? new Date(payload.startedAt) : existing.startedAt;
  const endedAt   = payload.endedAt   ? new Date(payload.endedAt)   : existing.endedAt;
  if (startedAt && endedAt && endedAt <= startedAt) {
    const err = new Error('La date de sortie doit être après la date d\'entrée');
    err.status = 400;
    throw err;
  }

  const updated = await prisma.loginSession.update({
    where: { id: sessionId },
    data: {
      ...(payload.clientName && { clientName: payload.clientName }),
      ...(payload.roomId     && { roomId:     payload.roomId }),
      ...(payload.startedAt  && { startedAt:  new Date(payload.startedAt) }),
      ...(payload.endedAt    && { endedAt:    new Date(payload.endedAt) }),
    },
    include: {
      room:      { select: { id: true, type: true, name: true } },
      guestPass: { select: { id: true, code: true, label: true } },
    },
  });

  await writeAuditLog({
    requestId:   reqMeta.requestId,
    eventType:   'wifi.session',
    entityType:  'login_session',
    entityId:    sessionId,
    action:      'update',
    actorUserId: reqMeta.actorUserId,
    hotelId:     existing.hotelId,
    payload,
  });

  return updated;
}

async function removeSessions(ids, reqMeta) {
  const sessions = await prisma.loginSession.findMany({ where: { id: { in: ids } } });
  if (sessions.length === 0) return { count: 0 };

  await prisma.loginSession.deleteMany({ where: { id: { in: ids } } });

  await writeAuditLog({
    requestId:   reqMeta.requestId,
    eventType:   'wifi.session',
    entityType:  'login_session',
    action:      'bulk-remove',
    actorUserId: reqMeta.actorUserId,
    hotelId:     sessions[0].hotelId,
    payload:     { ids, count: sessions.length },
    severity:    'WARNING',
  });

  return { count: sessions.length };
}

module.exports = {
  listLoginSessions,
  createManualLogin,
  updateLoginSession,
  removeSessions,
};