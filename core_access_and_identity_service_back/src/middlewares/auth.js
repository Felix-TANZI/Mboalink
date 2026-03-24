const jwt = require('jsonwebtoken');
const env = require('../config/env');

function unauthorized(message = 'Unauthorized') {
  const error = new Error(message);
  error.status = 401;
  return error;
}

function requireAuth(req, _res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return next(unauthorized('Missing bearer token'));
  }

  const token = authHeader.slice('Bearer '.length);

  try {
    const payload = jwt.verify(token, env.jwtAccessSecret);
    req.user = payload;
    return next();
  } catch (_error) {
    return next(unauthorized('Invalid or expired token'));
  }
}

function requireRole(...roles) {
  return (req, _res, next) => {
    if (!req.user) {
      return next(unauthorized('Authentication required'));
    }
    if (!roles.includes(req.user.role)) {
      const error = new Error('Forbidden');
      error.status = 403;
      return next(error);
    }
    return next();
  };
}

module.exports = {
  requireAuth,
  requireRole,
};
