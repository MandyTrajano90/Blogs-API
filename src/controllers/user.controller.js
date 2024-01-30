const httpMapper = require('../utils/httpMapper');
const userService = require('../services/user.service');

const getByEmail = async (req, res) => {
  const { email, password } = req.body;
  const { status, data } = await userService.getByEmail({ email, password });
  res.status(httpMapper(status)).json(data);
};

const createUser = async (req, res) => {
  const { displayName, email, password } = req.body;
  const { status, data } = await userService.createUser({ displayName, email, password });
  res.status(httpMapper(status)).json(data);
};

module.exports = {
  getByEmail,
  createUser,
};