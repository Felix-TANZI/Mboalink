const bcrypt = require('bcryptjs');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');

const prisma = require('../../config/prisma');
const env = require('../../config/env');
const { writeAuditLog } = require('../audit-logs/audit-log.service');
const { sendOtpEmail } = require('./mailer');

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

function generateOtp() {
  // Code OTP à 6 chiffres
  return String(Math.floor(100000 + Math.random() * 900000));
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

  // Générer un OTP à 6 chiffres, valable 10 minutes
  const otp = generateOtp();
  const otpExpiry = new Date(Date.now() + 10 * 60 * 1000);

  // Stocker le hash du code en base
  await prisma.user.update({
    where: { id: user.id },
    data: {
      otpCode: hashToken(otp),
      otpExpiry,
    },
  });

  // Envoyer le code par email
  await sendOtpEmail(user.email, otp);

  await writeAuditLog({
    requestId: context.requestId,
    eventType: 'auth.mfa',
    entityType: 'user',
    entityId: user.id,
    action: 'otp-sent',
    severity: 'INFO',
    actorUserId: user.id,
    payload: { email: user.email },
  });

  // On ne retourne PAS les tokens ici — ils seront générés après vérification MFA
  return {
    mfaRequired: true,
    email: user.email,
  };
}

async function verifyMfa(payload, context) {
  const user = await prisma.user.findUnique({ where: { email: payload.email } });

  if (!user || !user.isActive) {
    const err = new Error('Invalid credentials');
    err.status = 401;
    throw err;
  }

  // Vérifier que le code n'est pas expiré
  if (!user.otpCode || !user.otpExpiry || user.otpExpiry < new Date()) {
    const err = new Error('OTP expired or not found. Please login again.');
    err.status = 401;
    throw err;
  }

  // Vérifier le hash du code
  const isValid = user.otpCode === hashToken(payload.code);
  if (!isValid) {
    const err = new Error('Invalid verification code');
    err.status = 401;
    throw err;
  }

  // Effacer le code OTP — usage unique
  await prisma.user.update({
    where: { id: user.id },
    data: { otpCode: null, otpExpiry: null },
  });

  // Générer les tokens JWT
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
  verifyMfa,
  refreshAccessToken,
};