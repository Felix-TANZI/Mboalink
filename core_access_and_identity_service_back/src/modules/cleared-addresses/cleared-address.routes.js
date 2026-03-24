const { Router } = require('express');
const validate = require('../../middlewares/validate');
const { requireAuth, requireRole } = require('../../middlewares/auth');
const { getClearedAddresses, postClearedAddress, removeClearedAddresses } = require('./cleared-address.controller');
const { createClearedAddressSchema, deleteManyClearedAddressSchema } = require('./cleared-address.validation');

const router = Router();

router.get('/', requireAuth, getClearedAddresses);
router.post('/', requireAuth, requireRole('ADMIN', 'SUPPORT', 'RECEPTIONIST'), validate(createClearedAddressSchema), postClearedAddress);
router.delete('/', requireAuth, requireRole('ADMIN', 'SUPPORT', 'RECEPTIONIST'), validate(deleteManyClearedAddressSchema), removeClearedAddresses);

module.exports = router;
