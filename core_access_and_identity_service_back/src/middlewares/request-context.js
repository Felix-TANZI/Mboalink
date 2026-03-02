const { randomUUID } = require('crypto');

function requestContext(req, res, next) {
  const requestId = req.headers['x-request-id'] || randomUUID();
  req.context = {
    requestId,
    startedAt: Date.now(),
  };
  res.setHeader('x-request-id', requestId);
  next();
}

module.exports = requestContext;
