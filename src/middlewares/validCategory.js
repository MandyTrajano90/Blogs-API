const Joi = require('joi');

const newCategory = Joi.object({
  name: Joi.string().min(1).required(),
});

module.exports = {
  newCategory,
};