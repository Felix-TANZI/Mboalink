const { Router } = require('express');
const validate = require('../../middlewares/validate');
const { requireAuth, requireRole } = require('../../middlewares/auth');
const {
  getCaptivePortals,
  patchCaptivePortal,
  postCaptivePortal,
  removeCaptivePortal,
} = require('./captive-portal-instance.controller');
const {
  createCaptivePortalSchema,
  updateCaptivePortalSchema,
} = require('./captive-portal-instance.validation');

const router = Router({ mergeParams: true });

router.get('/', requireAuth, getCaptivePortals);
router.post('/', requireAuth, requireRole('ADMIN', 'HOTEL_IT'), validate(createCaptivePortalSchema), postCaptivePortal);
router.patch('/:portalId', requireAuth, requireRole('ADMIN', 'HOTEL_IT'), validate(updateCaptivePortalSchema), patchCaptivePortal);
router.delete('/:portalId', requireAuth, requireRole('ADMIN', 'HOTEL_IT'), removeCaptivePortal);

module.exports = router;
