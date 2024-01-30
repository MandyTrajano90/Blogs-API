const Joi = require('joi');

const errMessage = 'Some required fields are missing';

const validateLogin = Joi.object({
  email: Joi.string().required().min(1),
  password: Joi.string().min(6).required(),  
})
  .messages({
    'any.required': errMessage,
    'string.empty': errMessage,
  });

module.exports = {
  validateLogin,
};
