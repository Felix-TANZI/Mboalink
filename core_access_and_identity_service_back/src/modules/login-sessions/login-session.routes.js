const { Router } = require('express');
const validate = require('../../middlewares/validate');
const { requireAuth, requireRole } = require('../../middlewares/auth');
const { getLoginSessions, postManualLogin, deleteLoginSessions } = require('./login-session.controller');
const { createManualLoginSchema, deleteManySessionsSchema } = require('./login-session.validation');

const router = Router();

router.get('/', requireAuth, getLoginSessions);
router.post('/manual', requireAuth, requireRole('ADMIN', 'SUPPORT', 'RECEPTIONIST'), validate(createManualLoginSchema), postManualLogin);
router.delete('/', requireAuth, requireRole('ADMIN', 'SUPPORT', 'RECEPTIONIST'), validate(deleteManySessionsSchema), deleteLoginSessions);

module.exports = router;
