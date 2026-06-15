const asyncHandler = require('../../utils/async-handler');
const { success } = require('../../utils/api-response');
const {
  listNotificationRecipients,
  createNotification,
  listInbox,
  listSent,
  markNotificationRead,
  getUnreadCount,
} = require('./notification.service');

const getRecipients = asyncHandler(async (req, res) => {
  const recipients = await listNotificationRecipients(req.user);
  res.json(success(recipients));
});

const postNotification = asyncHandler(async (req, res) => {
  const notification = await createNotification(req.body, {
    requestId: req.context.requestId,
    actor: req.user,
  });
  res.status(201).json(success(notification));
});

const getInbox = asyncHandler(async (req, res) => {
  const notifications = await listInbox(req.user, req.query);
  res.json(success(notifications));
});

const getSent = asyncHandler(async (req, res) => {
  const notifications = await listSent(req.user);
  res.json(success(notifications));
});

const markRead = asyncHandler(async (req, res) => {
  const recipient = await markNotificationRead(req.params.notificationId, req.user);
  res.json(success(recipient));
});

const getCount = asyncHandler(async (req, res) => {
  const count = await getUnreadCount(req.user);
  res.json(success(count));
});

module.exports = {
  getRecipients,
  postNotification,
  getInbox,
  getSent,
  markRead,
  getCount,
};
