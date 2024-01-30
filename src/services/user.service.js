const { User } = require('../models');
const auth = require('../utils/auth');
const schema = require('../middlewares/validationInputs');

const getByEmail = async (loginCredentials) => {
  const error = schema.validationInputs(loginCredentials);
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

module.exports = {
  getByEmail,
};