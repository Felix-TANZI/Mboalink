const { Router } = require('express');
const validate = require('../../middlewares/validate');
const { requireAuth, requireRole } = require('../../middlewares/auth');
const { upsertWifiConfigSchema } = require('./wifi-config.validation');
const { getWifiConfigs, getWifiConfigByHotel, putWifiConfig } = require('./wifi-config.controller');

const router = Router();

router.get('/wifi-configs', requireAuth, getWifiConfigs);
router.get('/hotels/:hotelId/wifi-config', requireAuth, getWifiConfigByHotel);
router.put('/hotels/:hotelId/wifi-config', requireAuth, requireRole('ADMIN', 'SUPPORT'), validate(upsertWifiConfigSchema), putWifiConfig);

module.exports = router;
