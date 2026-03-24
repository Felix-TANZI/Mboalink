const { Router } = require('express');
const { requireAuth } = require('../../middlewares/auth');
const { getDashboardOverview } = require('./dashboard.controller');

const router = Router();

router.get('/overview', requireAuth, getDashboardOverview);

module.exports = router;
