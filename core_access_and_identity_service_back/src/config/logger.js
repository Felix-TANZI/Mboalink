const pino = require('pino');
const env = require('./env');

const logger = pino({
  level: process.env.LOG_LEVEL || 'info',
  base: {
    service: env.serviceName,
    env: env.nodeEnv,
  },
  timestamp: pino.stdTimeFunctions.isoTime,
  formatters: {
    level(label) {
      return { level: label };
    },
  },
});

module.exports = logger;
