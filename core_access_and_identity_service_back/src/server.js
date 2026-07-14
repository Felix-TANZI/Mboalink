const app = require('./app');
const env = require('./config/env');
const logger = require('./config/logger');
const { startDeviceHeartbeatWorker } = require('./workers/device-heartbeat.worker');

app.listen(env.port, () => {
  logger.info({ port: env.port }, 'Mboalink backend started');
  startDeviceHeartbeatWorker();
});
