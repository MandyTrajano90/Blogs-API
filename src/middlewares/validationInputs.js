const { validateLogin } = require('./validateLogin');
const { createUser } = require('./validUser');
const { newCategory } = require('./validCategory');
const { validPost } = require('./validPost');
const { validUpdatePost } = require('./validUpdatePost');

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
// const newCategoryValidation = (req, res, next) => {
//   const { name } = req.body;
//   if (!name || name === '') {
//     return res.status('BAD_REQUEST').json({ message: '"name" is required' });
//   }
//   next();
// };
// const validateCategoryIdsValidation = (req, res, next) => {
//   const { categoryIds } = req.body;
//   const { status, message } = validateCategoryIds(categoryIds);
//   if (status === 'BAD_REQUEST') return res.status(400).json({ message });
//   next();
// };

// const newPostValidation = (req, res, next) => {
//   const { title, content, categoryIds } = req.body;
//   const { status, message } = validPost({ title, content, categoryIds });
//   return res.status(http).json({ message });
//   next();
// };
const updatePost = (keys) => {
  const { error } = validUpdatePost.validate(keys);
  if (error) return { status: 'BAD_REQUEST', message: error.message };
};

module.exports = {
  loginValidation,
  newUserValidation,
  newCategoryValidation,
  newPostValidation,
  updatePost,
};
