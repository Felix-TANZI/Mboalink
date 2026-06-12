const { Router } = require('express');

const validate = require('../../middlewares/validate');
const { requireAuth, requireRole } = require('../../middlewares/auth');
const {
  getGuestPasses,
  postGuestPass,
  postGuestPassesBulk,
  patchRevokeGuestPass,
  removeGuestPass,
} = require('./guest-pass.controller');
const { createGuestPassSchema, bulkGuestPassSchema } = require('./guest-pass.validation');

const router = Router();

router.get('/', requireAuth, getGuestPasses);
router.post('/', requireAuth, requireRole('ADMIN', 'SUPPORT', 'HOTEL_IT'), validate(createGuestPassSchema), postGuestPass);
router.post('/bulk', requireAuth, requireRole('ADMIN', 'SUPPORT', 'HOTEL_IT'), validate(bulkGuestPassSchema), postGuestPassesBulk);
router.patch('/:passId/revoke', requireAuth, requireRole('ADMIN', 'SUPPORT', 'HOTEL_IT'), patchRevokeGuestPass);
router.delete('/:passId', requireAuth, requireRole('ADMIN', 'SUPPORT', 'HOTEL_IT'), removeGuestPass);

module.exports = router;
