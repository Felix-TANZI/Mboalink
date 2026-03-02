const { ZodError } = require('zod');
const logger = require('../config/logger');
const { failure } = require('../utils/api-response');

function errorHandler(err, req, res, _next) {
  const status = err.status || 500;

  if (err instanceof ZodError) {
    return res.status(400).json(
      failure('Validation error', err.issues.map((issue) => ({
        path: issue.path.join('.'),
        message: issue.message,
      }))),
    );
  }

  logger.error({
    requestId: req.context?.requestId,
    error: {
      message: err.message,
      stack: err.stack,
    },
  }, 'Unhandled error');

  return res.status(status).json(
    failure(status === 500 ? 'Internal server error' : err.message),
  );
}

module.exports = errorHandler;
