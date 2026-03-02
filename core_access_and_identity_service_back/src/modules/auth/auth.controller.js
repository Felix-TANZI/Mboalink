const asyncHandler = require('../../utils/async-handler');
const { success } = require('../../utils/api-response');
const { registerUser, loginUser, refreshAccessToken } = require('./auth.service');

const register = asyncHandler(async (req, res) => {
  const user = await registerUser(req.body, req.context);
  res.status(201).json(success(user));
});

const login = asyncHandler(async (req, res) => {
  const data = await loginUser(req.body, req.context);
  res.json(success(data));
});

const refresh = asyncHandler(async (req, res) => {
  const data = await refreshAccessToken(req.body, req.context);
  res.json(success(data));
});

const me = asyncHandler(async (req, res) => {
  res.json(success(req.user));
});

module.exports = {
  register,
  login,
  refresh,
  me,
};
