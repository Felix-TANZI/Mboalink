const dotenv = require('dotenv');

dotenv.config();

const env = {
  nodeEnv: process.env.NODE_ENV || 'development',
  port: Number(process.env.PORT || 3000),
  jwtAccessSecret: process.env.JWT_ACCESS_SECRET || 'mboalink-access-secret',
  jwtRefreshSecret: process.env.JWT_REFRESH_SECRET || 'mboalink-refresh-secret',
  accessTokenTtl: process.env.ACCESS_TOKEN_TTL || '15m',
  refreshTokenTtl: process.env.REFRESH_TOKEN_TTL || '7d',
  databaseUrl: process.env.DATABASE_URL || '',
  serviceName: process.env.SERVICE_NAME || 'mboalink-backend',
};

module.exports = env;
