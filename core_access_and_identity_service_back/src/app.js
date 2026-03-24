const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const pinoHttp = require('pino-http');

const logger = require('./config/logger');
const requestContext = require('./middlewares/request-context');
const notFound = require('./middlewares/not-found');
const errorHandler = require('./middlewares/error-handler');
const apiRoutes = require('./routes');
const { setupSwagger } = require('./config/swagger');

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json({ limit: '2mb' }));
app.use(requestContext);
app.use(pinoHttp({ logger }));

app.get('/health', (_req, res) => {
  res.json({ ok: true, service: 'mboalink-backend' });
});

setupSwagger(app);

app.use('/api/v1', apiRoutes);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
