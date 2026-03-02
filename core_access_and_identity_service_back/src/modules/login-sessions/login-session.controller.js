const asyncHandler = require('../../utils/async-handler');
const { success } = require('../../utils/api-response');
const { listLoginSessions, createManualLogin, removeSessions } = require('./login-session.service');

const getLoginSessions = asyncHandler(async (req, res) => {
  const data = await listLoginSessions(req.query);
  res.json(success(data));
});

const postManualLogin = asyncHandler(async (req, res) => {
  const data = await createManualLogin(req.body, {
    requestId: req.context.requestId,
    actorUserId: req.user?.sub,
  });
  res.status(201).json(success(data));
});

const deleteLoginSessions = asyncHandler(async (req, res) => {
  const data = await removeSessions(req.body.ids, {
    requestId: req.context.requestId,
    actorUserId: req.user?.sub,
  });
  res.json(success(data));
});

module.exports = {
  getLoginSessions,
  postManualLogin,
  deleteLoginSessions,
};
