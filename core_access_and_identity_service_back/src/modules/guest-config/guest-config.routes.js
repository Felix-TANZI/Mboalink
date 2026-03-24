const { Router } = require('express');
const validate = require('../../middlewares/validate');
const { requireAuth, requireRole } = require('../../middlewares/auth');
const { getConfig, putConfig } = require('./guest-config.controller');
const { upsertGuestConfigSchema } = require('./guest-config.validation');

const router = Router();

router.get('/hotels/:hotelId/guest-config', requireAuth, getConfig);
router.put('/guest-config', requireAuth, requireRole('ADMIN', 'SUPPORT'), validate(upsertGuestConfigSchema), putConfig);

module.exports = router;
