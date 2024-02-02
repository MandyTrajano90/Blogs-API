const { validateLogin } = require('./validateLogin');
const { createUser } = require('./validUser');
const { newCategory } = require('./validCategory');
const { validPost } = require('./validPost');

const loginValidation = (keys) => {
  const { error } = validateLogin.validate(keys);
  if (error) return { status: 'BAD_REQUEST', message: error.message };
};

const newUserValidation = (keys) => {
  const { error } = createUser.validate(keys);
  if (error) return { status: 'BAD_REQUEST', message: error.message };
};

const newCategoryValidation = (keys) => {
  const { error } = newCategory.validate(keys);
  if (error) return { status: 'BAD_REQUEST', message: error.message };
};

const newPostValidation = (keys) => {
  const { error } = validPost.validate(keys);
  if (error) return { status: 'BAD_REQUEST', message: error.message };
};

module.exports = {
  loginValidation,
  newUserValidation,
  newCategoryValidation,
  newPostValidation,
};
