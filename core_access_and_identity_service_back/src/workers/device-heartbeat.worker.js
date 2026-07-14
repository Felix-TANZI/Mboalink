const env = require('../config/env');
const logger = require('../config/logger');
const { heartbeatOnlineDevices } = require('../modules/devices/device.service');

function startDeviceHeartbeatWorker() {
  if (!env.deviceHeartbeatEnabled) {
    logger.info('Device heartbeat worker disabled');
    return null;
  }

  const intervalMs = Math.max(env.deviceHeartbeatIntervalMs, 5000);

  async function tick() {
    try {
      const result = await heartbeatOnlineDevices();
      logger.debug(result, 'Device heartbeat tick completed');
    } catch (error) {
      logger.error({ error }, 'Device heartbeat tick failed');
    }
  }

  const timer = setInterval(tick, intervalMs);
  timer.unref?.();

  tick();
  logger.info({ intervalMs }, 'Device heartbeat worker started');

  return timer;
}

module.exports = {
  startDeviceHeartbeatWorker,
};
