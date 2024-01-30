const { User } = require('../models');
const auth = require('../utils/auth');
const schema = require('../middlewares/validationInputs');

const getByEmail = async (loginCredentials) => {
  const error = schema.loginValidation(loginCredentials);
  if (error) return { status: 'BAD_REQUEST', data: { message: error.message } };

  const user = await User.findOne({ where: { email: loginCredentials.email,
  },
  });

  if (!user || user.password !== loginCredentials.password) { 
    return { status: 'BAD_REQUEST', data: { message: 'Invalid fields' } };
  }

  const { email } = user;
  const token = auth.generateToken({ email });
  return { status: 'SUCCESSFUL', data: { token } };
};

const createUser = async (newUser) => {
  const error = schema.newUserValidation(newUser);
  if (error) return { status: 'BAD_REQUEST', data: { message: error.message } };

  const userExists = await User.findOne({ where: { email: newUser.email } });
  if (userExists && newUser.email === userExists.email) {
    return { status: 'CONFLICT', data: { message: 'User already registered' } };
  }

  await User.create(newUser);
  const { displayName, email } = newUser;
  const token = auth.generateToken({ displayName, email });

  return { status: 'CREATED', data: { token } };
};

module.exports = {
  getByEmail,
  createUser,
};