const { Router } = require('express');

const validate = require('../../middlewares/validate');
const { requireAuth, requireRole } = require('../../middlewares/auth');
const { createUserSchema, updateUserSchema } = require('./user.validation');
const { getUsers, postUser, patchUser, deactivate } = require('./user.controller');

const router = Router();

router.get('/', requireAuth, requireRole('ADMIN'), getUsers);
router.post('/', requireAuth, requireRole('ADMIN'), validate(createUserSchema), postUser);
router.patch('/:userId', requireAuth, requireRole('ADMIN'), validate(updateUserSchema), patchUser);
router.patch('/:userId/deactivate', requireAuth, requireRole('ADMIN'), deactivate);

module.exports = router;
