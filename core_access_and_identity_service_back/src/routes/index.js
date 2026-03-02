const { Router } = require('express');

const authRoutes = require('../modules/auth/auth.routes');
const hotelRoutes = require('../modules/hotels/hotel.routes');
const roomRoutes = require('../modules/rooms/room.routes');
const wifiConfigRoutes = require('../modules/wifi-configs/wifi-config.routes');
const guestPassRoutes = require('../modules/guest-passes/guest-pass.routes');
const loginSessionRoutes = require('../modules/login-sessions/login-session.routes');
const clearedAddressRoutes = require('../modules/cleared-addresses/cleared-address.routes');
const guestConfigRoutes = require('../modules/guest-config/guest-config.routes');
const deviceRoutes = require('../modules/devices/device.routes');
const dashboardRoutes = require('../modules/dashboard/dashboard.routes');
const auditLogRoutes = require('../modules/audit-logs/audit-log.routes');

const router = Router();

router.use('/auth', authRoutes);
router.use('/hotels', hotelRoutes);
router.use('/', roomRoutes);
router.use('/', wifiConfigRoutes);
router.use('/guest-passes', guestPassRoutes);
router.use('/login-sessions', loginSessionRoutes);
router.use('/cleared-addresses', clearedAddressRoutes);
router.use('/', guestConfigRoutes);
router.use('/devices', deviceRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/audit-logs', auditLogRoutes);

module.exports = router;
