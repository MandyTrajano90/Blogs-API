// const Sequelize = require('sequelize');
// const config = require('../config/config');
const { Category, PostCategory } = require('../models');

// const env = process.env.NODE_ENV || 'development';
// const sequelize = new Sequelize(config[env]);

const validateCategories = async (categoryIds) => {
  const arrayCategories = categoryIds.map(async (id) => {
    const category = await Category.findByPk(id);
    if (!category) {
      throw new Error('one or more "categoryIds" not found');
    }
  });
  await Promise.all(arrayCategories); 
};

const associatePostCategory = async (postId, categoryIds, transaction) => {
  const arrayOfPromises = categoryIds.map((categoryId) => ({ postId, categoryId }));
  await PostCategory.bulkCreate(arrayOfPromises, transaction);
};

module.exports = {
  validateCategories,
  associatePostCategory,
};