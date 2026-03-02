const { Router } = require('express');

const validate = require('../../middlewares/validate');
const { requireAuth } = require('../../middlewares/auth');
const { register, login, refresh, me } = require('./auth.controller');
const { registerSchema, loginSchema, refreshSchema } = require('./auth.validation');

const router = Router();

router.post('/register', validate(registerSchema), register);
router.post('/login', validate(loginSchema), login);
router.post('/refresh', validate(refreshSchema), refresh);
router.get('/me', requireAuth, me);

module.exports = router;
