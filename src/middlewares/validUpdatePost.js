const Joi = require('joi');

const errorMessage = 'Some required fields are missing';

const validUpdatePost = Joi.object({
  title: Joi.string().min(1).required(),
  content: Joi.string().min(1).required(),
})
  .messages({
    'any.required': errorMessage,
    'string.empty': errorMessage,
  });

module.exports = { validUpdatePost };