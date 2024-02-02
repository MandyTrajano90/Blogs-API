const Joi = require('joi');

const errorMessage = 'Some required fields are missing';

const newPost = Joi.object({
  title: Joi.string().min(1).required(),
  content: Joi.string().min(1).required(),
  categoryIds: Joi.array.required().min(1),
  email: Joi.string(),
})
  .messages({
    'any.required': errorMessage,
    'string.empty': errorMessage,
    'array.min': 'one or more "categoryIds" not found',
  });

module.exports = {
  newPost,
};