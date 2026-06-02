const { Router } = require('express');

const validate = require('../../middlewares/validate');
const { postCaptiveAuth, getCaptiveHotelPublic } = require('./captive-portal.controller');
const { captiveAuthSchema } = require('./captive-portal.validation');

const router = Router();

router.get('/hotel', getCaptiveHotelPublic);
router.get('/hotel/:hotelId', getCaptiveHotelPublic);
router.post('/auth', validate(captiveAuthSchema), postCaptiveAuth);

module.exports = router;
