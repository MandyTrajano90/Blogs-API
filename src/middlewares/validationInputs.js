const { validateLogin } = require('./validateLogin');

const validationInputs = (keys) => {
  const { error } = validateLogin.validate(keys);
  if (error) return { status: 'BAD_REQUEST', message: error.message };
};

module.exports = {
  validationInputs,
};
