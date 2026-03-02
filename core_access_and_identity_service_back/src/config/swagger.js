const swaggerUi = require('swagger-ui-express');

const spec = {
  openapi: '3.0.3',
  info: {
    title: 'Mboalink Backend API',
    version: '1.0.0',
    description: 'API Node.js MVC pour la gestion hotels, WiFi guest pass, device manager et analytics logs.',
  },
  servers: [
    { url: 'http://localhost:3000', description: 'Local' },
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      },
    },
  },
  security: [{ bearerAuth: [] }],
  paths: {
    '/health': { get: { summary: 'Health check', responses: { '200': { description: 'OK' } } } },
    '/api/v1/auth/register': { post: { summary: 'Register user', responses: { '201': { description: 'Created' } } } },
    '/api/v1/auth/login': { post: { summary: 'Login', responses: { '200': { description: 'OK' } } } },
    '/api/v1/auth/refresh': { post: { summary: 'Refresh access token', responses: { '200': { description: 'OK' } } } },
    '/api/v1/auth/me': { get: { summary: 'Current user', responses: { '200': { description: 'OK' } } } },

    '/api/v1/hotels': {
      get: { summary: 'List hotels', responses: { '200': { description: 'OK' } } },
      post: { summary: 'Create hotel', responses: { '201': { description: 'Created' } } },
    },
    '/api/v1/hotels/{hotelId}': {
      get: { summary: 'Get hotel', responses: { '200': { description: 'OK' } } },
      patch: { summary: 'Update hotel', responses: { '200': { description: 'OK' } } },
      delete: { summary: 'Delete hotel', responses: { '200': { description: 'OK' } } },
    },

    '/api/v1/rooms': { get: { summary: 'List rooms', responses: { '200': { description: 'OK' } } } },
    '/api/v1/hotels/{hotelId}/rooms': { post: { summary: 'Create room', responses: { '201': { description: 'Created' } } } },
    '/api/v1/rooms/{roomId}': {
      patch: { summary: 'Update room', responses: { '200': { description: 'OK' } } },
      delete: { summary: 'Delete room', responses: { '200': { description: 'OK' } } },
    },

    '/api/v1/wifi-configs': { get: { summary: 'List WiFi config', responses: { '200': { description: 'OK' } } } },
    '/api/v1/hotels/{hotelId}/wifi-config': {
      get: { summary: 'Get hotel WiFi config', responses: { '200': { description: 'OK' } } },
      put: { summary: 'Upsert hotel WiFi config', responses: { '200': { description: 'OK' } } },
    },

    '/api/v1/guest-passes': {
      get: { summary: 'List guest passes', responses: { '200': { description: 'OK' } } },
      post: { summary: 'Create guest pass', responses: { '201': { description: 'Created' } } },
    },
    '/api/v1/guest-passes/bulk': { post: { summary: 'Create mass guest passes', responses: { '201': { description: 'Created' } } } },
    '/api/v1/guest-passes/{passId}/revoke': { patch: { summary: 'Revoke guest pass', responses: { '200': { description: 'OK' } } } },
    '/api/v1/guest-passes/{passId}': { delete: { summary: 'Delete guest pass', responses: { '200': { description: 'OK' } } } },

    '/api/v1/login-sessions': {
      get: { summary: 'List login sessions', responses: { '200': { description: 'OK' } } },
      delete: { summary: 'Bulk delete sessions', responses: { '200': { description: 'OK' } } },
    },
    '/api/v1/login-sessions/manual': { post: { summary: 'Manual login', responses: { '201': { description: 'Created' } } } },

    '/api/v1/cleared-addresses': {
      get: { summary: 'List cleared addresses', responses: { '200': { description: 'OK' } } },
      post: { summary: 'Create cleared address', responses: { '201': { description: 'Created' } } },
      delete: { summary: 'Delete cleared addresses', responses: { '200': { description: 'OK' } } },
    },

    '/api/v1/hotels/{hotelId}/guest-config': { get: { summary: 'Get guest config by hotel', responses: { '200': { description: 'OK' } } } },
    '/api/v1/guest-config': { put: { summary: 'Update guest config', responses: { '200': { description: 'OK' } } } },

    '/api/v1/devices': {
      get: { summary: 'List devices', responses: { '200': { description: 'OK' } } },
      post: { summary: 'Create device', responses: { '201': { description: 'Created' } } },
    },
    '/api/v1/devices/mac-addresses': {
      get: { summary: 'List device MAC addresses', responses: { '200': { description: 'OK' } } },
    },
    '/api/v1/devices/by-mac/{macAddress}': { get: { summary: 'Get device by MAC address', responses: { '200': { description: 'OK' } } } },
    '/api/v1/devices/{deviceId}': { patch: { summary: 'Update device', responses: { '200': { description: 'OK' } } } },
    '/api/v1/devices/{deviceId}/restart': { post: { summary: 'Restart device', responses: { '200': { description: 'OK' } } } },
    '/api/v1/devices/{deviceId}/metrics': {
      get: { summary: 'List device metrics', responses: { '200': { description: 'OK' } } },
      post: { summary: 'Ingest device metric', responses: { '201': { description: 'Created' } } },
    },

    '/api/v1/dashboard/overview': { get: { summary: 'Dashboard overview', responses: { '200': { description: 'OK' } } } },
    '/api/v1/audit-logs': { get: { summary: 'List audit logs', responses: { '200': { description: 'OK' } } } },
    '/api/v1/audit-logs/export/jsonl': { get: { summary: 'Export logs as JSONL', responses: { '200': { description: 'OK' } } } },
  },
};

function setupSwagger(app) {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(spec));
  app.get('/swagger.json', (_req, res) => {
    res.json(spec);
  });
}

module.exports = {
  setupSwagger,
};
