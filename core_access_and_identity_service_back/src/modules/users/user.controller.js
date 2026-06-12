const asyncHandler = require('../../utils/async-handler');
const { success } = require('../../utils/api-response');
const {
  listUsers,
  createUser,
  updateUser,
  deactivateUser,
} = require('./user.service');

const getUsers = asyncHandler(async (req, res) => {
  const users = await listUsers(req.query);
  res.json(success(users));
});

const postUser = asyncHandler(async (req, res) => {
  const user = await createUser(req.body, {
    requestId: req.context.requestId,
    actorUserId: req.user?.sub,
  });
  res.status(201).json(success(user));
});

const patchUser = asyncHandler(async (req, res) => {
  const user = await updateUser(req.params.userId, req.body, {
    requestId: req.context.requestId,
    actorUserId: req.user?.sub,
  });
  res.json(success(user));
});

const deactivate = asyncHandler(async (req, res) => {
  const user = await deactivateUser(req.params.userId, {
    requestId: req.context.requestId,
    actorUserId: req.user?.sub,
  });
  res.json(success(user));
});

module.exports = {
  getUsers,
  postUser,
  patchUser,
  deactivate,
};
