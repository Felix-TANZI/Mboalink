const { failure } = require('../utils/api-response');

function notFound(req, res) {
  res.status(404).json(failure(`Route not found: ${req.method} ${req.originalUrl}`));
}

module.exports = notFound;
