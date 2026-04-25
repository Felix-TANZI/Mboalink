const { Router } = require('express');

const validate = require('../../middlewares/validate');
const { postCaptiveAuth } = require('./captive-portal.controller');
const { captiveAuthSchema } = require('./captive-portal.validation');

const router = Router();

router.post('/auth', validate(captiveAuthSchema), postCaptiveAuth);

module.exports = router;
