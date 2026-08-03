const { exec } = require('child_process');

const logger = require('../../config/logger');

const DEFAULT_SYNC_COMMAND = 'node scripts/generate-captive-instances.js';

function isAutoSyncEnabled() {
  return process.env.CAPTIVE_AUTO_SYNC_ENABLED !== 'false';
}

function triggerCaptiveInstanceSync(context = {}) {
  if (!isAutoSyncEnabled()) return;

  const command = process.env.CAPTIVE_AUTO_SYNC_COMMAND || DEFAULT_SYNC_COMMAND;

  exec(command, {
    cwd: process.cwd(),
    timeout: Number(process.env.CAPTIVE_AUTO_SYNC_TIMEOUT_MS || 30000),
    env: process.env,
  }, (error, stdout, stderr) => {
    if (error) {
      logger.error({
        command,
        context,
        error: {
          message: error.message,
          code: error.code,
          signal: error.signal,
        },
        stderr,
      }, 'Captive portal instance sync failed');
      return;
    }

    logger.info({
      command,
      context,
      stdout,
      stderr,
    }, 'Captive portal instance sync completed');
  });
}

module.exports = {
  triggerCaptiveInstanceSync,
};
