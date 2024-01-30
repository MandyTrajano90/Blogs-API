const { Category } = require('../models');
const schema = require('../middlewares/validationInputs');

const createCategory = async (newCategory) => {
  const error = schema.newCategoryValidation(newCategory);
  if (error) return { status: 'BAD_REQUEST', data: { message: error.message } };

  // const categoryExists = await Category.findOne({ where: { name: newCategory.name } });
  // if (categoryExists && newCategory.name === categoryExists.name) {
  //   return { status: 'CONFLICT', data: { message: 'Category already registered' } };
  // }

  await Category.create(newCategory);

  const category = await Category.findOne({ where: { name: newCategory.name } });

  return { status: 'CREATED', data: category };
};
module.exports = {
  createCategory,
};