const bcrypt = require('bcryptjs');

const prisma = require('../../config/prisma');
const { writeAuditLog } = require('../audit-logs/audit-log.service');

const HOTEL_SCOPED_ROLES = ['RECEPTIONIST', 'HOTEL_IT'];

function normalizeHotelId(role, hotelId) {
  const normalized = hotelId || null;

  if (HOTEL_SCOPED_ROLES.includes(role) && !normalized) {
    const err = new Error('Hotel is required for this role');
    err.status = 400;
    throw err;
  }

  if (!HOTEL_SCOPED_ROLES.includes(role)) {
    return null;
  }

  return normalized;
}

async function ensureHotelExists(hotelId) {
  if (!hotelId) return;

  const hotel = await prisma.hotel.findUnique({ where: { id: hotelId } });
  if (!hotel) {
    const err = new Error('Hotel not found');
    err.status = 404;
    throw err;
  }
}

function userSelect() {
  return {
    id: true,
    email: true,
    fullName: true,
    role: true,
    hotelId: true,
    isActive: true,
    createdAt: true,
    updatedAt: true,
    hotel: { select: { id: true, name: true } },
  };
}

async function listUsers(query) {
  const search = query.search?.trim();

  return prisma.user.findMany({
    where: {
      role: query.role || undefined,
      hotelId: query.hotelId || undefined,
      isActive: query.isActive ? query.isActive === 'true' : undefined,
      OR: search ? [
        { email: { contains: search, mode: 'insensitive' } },
        { fullName: { contains: search, mode: 'insensitive' } },
        { hotel: { name: { contains: search, mode: 'insensitive' } } },
      ] : undefined,
    },
    select: userSelect(),
    orderBy: { createdAt: 'desc' },
  });
}

async function createUser(payload, reqMeta) {
  const role = payload.role;
  const hotelId = normalizeHotelId(role, payload.hotelId);
  await ensureHotelExists(hotelId);

  const exists = await prisma.user.findUnique({ where: { email: payload.email } });
  if (exists) {
    const err = new Error('Email already in use');
    err.status = 409;
    throw err;
  }

  const passwordHash = await bcrypt.hash(payload.password, 10);
  const user = await prisma.user.create({
    data: {
      email: payload.email.toLowerCase(),
      passwordHash,
      fullName: payload.fullName,
      role,
      hotelId,
      isActive: payload.isActive ?? true,
    },
    select: userSelect(),
  });

  await writeAuditLog({
    requestId: reqMeta.requestId,
    eventType: 'auth.user',
    entityType: 'user',
    entityId: user.id,
    action: 'create',
    actorUserId: reqMeta.actorUserId,
    hotelId,
    payload: {
      email: user.email,
      role: user.role,
      hotelId: user.hotelId,
      isActive: user.isActive,
    },
  });

  return user;
}

async function updateUser(userId, payload, reqMeta) {
  const existing = await prisma.user.findUnique({ where: { id: userId } });
  if (!existing) {
    const err = new Error('User not found');
    err.status = 404;
    throw err;
  }

  const nextRole = payload.role || existing.role;
  const nextHotelId = Object.prototype.hasOwnProperty.call(payload, 'hotelId')
    ? payload.hotelId
    : existing.hotelId;
  const hotelId = normalizeHotelId(nextRole, nextHotelId);
  await ensureHotelExists(hotelId);

  const data = {
    ...(payload.email && { email: payload.email.toLowerCase() }),
    ...(payload.fullName && { fullName: payload.fullName }),
    ...(payload.role && { role: payload.role }),
    hotelId,
    ...(typeof payload.isActive === 'boolean' && { isActive: payload.isActive }),
  };

  if (payload.password) {
    data.passwordHash = await bcrypt.hash(payload.password, 10);
  }

  const user = await prisma.user.update({
    where: { id: userId },
    data,
    select: userSelect(),
  });

  await writeAuditLog({
    requestId: reqMeta.requestId,
    eventType: 'auth.user',
    entityType: 'user',
    entityId: user.id,
    action: 'update',
    actorUserId: reqMeta.actorUserId,
    hotelId: user.hotelId,
    payload: {
      email: user.email,
      role: user.role,
      hotelId: user.hotelId,
      isActive: user.isActive,
      passwordChanged: Boolean(payload.password),
    },
  });

  return user;
}

async function deactivateUser(userId, reqMeta) {
  const existing = await prisma.user.findUnique({ where: { id: userId } });
  if (!existing) {
    const err = new Error('User not found');
    err.status = 404;
    throw err;
  }

  const user = await prisma.user.update({
    where: { id: userId },
    data: { isActive: false },
    select: userSelect(),
  });

  await writeAuditLog({
    requestId: reqMeta.requestId,
    eventType: 'auth.user',
    entityType: 'user',
    entityId: user.id,
    action: 'deactivate',
    actorUserId: reqMeta.actorUserId,
    hotelId: user.hotelId,
    payload: { email: user.email, role: user.role },
    severity: 'WARNING',
  });

  return user;
}

module.exports = {
  listUsers,
  createUser,
  updateUser,
  deactivateUser,
};
