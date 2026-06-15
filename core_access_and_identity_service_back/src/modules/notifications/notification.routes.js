const { Router } = require('express');

const validate = require('../../middlewares/validate');
const { requireAuth, requireRole } = require('../../middlewares/auth');
const { createNotificationSchema } = require('./notification.validation');
const {
  getRecipients,
  postNotification,
  getInbox,
  getSent,
  markRead,
  getCount,
} = require('./notification.controller');

const router = Router();

router.get('/recipients', requireAuth, getRecipients);
router.get('/inbox', requireAuth, getInbox);
router.get('/sent', requireAuth, getSent);
router.get('/unread-count', requireAuth, getCount);
router.post(
  '/',
  requireAuth,
  requireRole('ADMIN', 'SUPPORT', 'HOTEL_IT'),
  validate(createNotificationSchema),
  postNotification,
);
router.patch('/:notificationId/read', requireAuth, markRead);

module.exports = router;
