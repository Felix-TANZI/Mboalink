const bcrypt = require('bcryptjs');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');

const prisma = require('../../config/prisma');
const env = require('../../config/env');
const { writeAuditLog } = require('../audit-logs/audit-log.service');

function signAccessToken(user) {
  return jwt.sign(
    { sub: user.id, email: user.email, role: user.role, fullName: user.fullName },
    env.jwtAccessSecret,
    { expiresIn: env.accessTokenTtl },
  );
}

function signRefreshToken(user) {
  return jwt.sign(
    { sub: user.id, type: 'refresh' },
    env.jwtRefreshSecret,
    { expiresIn: env.refreshTokenTtl },
  );
}

function hashToken(token) {
  return crypto.createHash('sha256').update(token).digest('hex');
}

async function registerUser(payload, context) {
  const exists = await prisma.user.findUnique({ where: { email: payload.email } });
  if (exists) {
    const err = new Error('Email already in use');
    err.status = 409;
    throw err;
  }

  const passwordHash = await bcrypt.hash(payload.password, 10);

  const user = await prisma.user.create({
    data: {
      email: payload.email,
      passwordHash,
      fullName: payload.fullName,
      role: payload.role || 'CLIENT',
    },
  });

  await writeAuditLog({
    requestId: context.requestId,
    eventType: 'auth.user',
    entityType: 'user',
    entityId: user.id,
    action: 'register',
    severity: 'INFO',
    actorUserId: user.id,
    payload: { email: user.email, role: user.role },
  });

  return {
    id: user.id,
    email: user.email,
    fullName: user.fullName,
    role: user.role,
    createdAt: user.createdAt,
  };
}

async function loginUser(payload, context) {
  const user = await prisma.user.findUnique({ where: { email: payload.email } });

  if (!user || !user.isActive) {
    const err = new Error('Invalid credentials');
    err.status = 401;
    throw err;
  }

  const ok = await bcrypt.compare(payload.password, user.passwordHash);
  if (!ok) {
    const err = new Error('Invalid credentials');
    err.status = 401;
    throw err;
  }

  const accessToken = signAccessToken(user);
  const refreshToken = signRefreshToken(user);
  const decoded = jwt.decode(refreshToken);

  await prisma.refreshToken.create({
    data: {
      userId: user.id,
      tokenHash: hashToken(refreshToken),
      expiresAt: new Date(decoded.exp * 1000),
    },
  });

  await writeAuditLog({
    requestId: context.requestId,
    eventType: 'auth.session',
    entityType: 'user',
    entityId: user.id,
    action: 'login',
    severity: 'INFO',
    actorUserId: user.id,
    payload: { email: user.email },
  });

  return {
    accessToken,
    refreshToken,
    user: {
      id: user.id,
      email: user.email,
      fullName: user.fullName,
      role: user.role,
    },
  };
}

async function refreshAccessToken(payload, context) {
  let decoded;
  try {
    decoded = jwt.verify(payload.refreshToken, env.jwtRefreshSecret);
  } catch (_error) {
    const err = new Error('Invalid refresh token');
    err.status = 401;
    throw err;
  }

  const saved = await prisma.refreshToken.findUnique({
    where: { tokenHash: hashToken(payload.refreshToken) },
  });

  if (!saved || saved.expiresAt < new Date()) {
    const err = new Error('Refresh token expired or revoked');
    err.status = 401;
    throw err;
  }

  const user = await prisma.user.findUnique({ where: { id: decoded.sub } });
  if (!user || !user.isActive) {
    const err = new Error('User not found or inactive');
    err.status = 401;
    throw err;
  }

  const accessToken = signAccessToken(user);

  await writeAuditLog({
    requestId: context.requestId,
    eventType: 'auth.session',
    entityType: 'user',
    entityId: user.id,
    action: 'refresh-token',
    severity: 'INFO',
    actorUserId: user.id,
    payload: {},
  });

  return { accessToken };
}

module.exports = {
  registerUser,
  loginUser,
  refreshAccessToken,
};
