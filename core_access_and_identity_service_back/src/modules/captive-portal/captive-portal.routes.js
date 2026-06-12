const { Router } = require('express');

const validate = require('../../middlewares/validate');
const { postCaptiveAuth, getCaptiveHotelPublic } = require('./captive-portal.controller');
const { captiveAuthSchema } = require('./captive-portal.validation');

const router = Router();

function requireCaptiveApiKey(req, res, next) {
  const expected = process.env.CAPTIVE_PORTAL_API_KEY;
  if (!expected) return next();

  const received = req.headers['x-mboalink-captive-key'];
  if (received === expected) return next();

  return res.status(401).json({
    ok: false,
    error: { message: 'Clé portail captif invalide.' },
  });
}

router.get('/hotel', getCaptiveHotelPublic);
router.get('/hotel/:hotelId', getCaptiveHotelPublic);
router.post('/auth', requireCaptiveApiKey, validate(captiveAuthSchema), postCaptiveAuth);

module.exports = router;
