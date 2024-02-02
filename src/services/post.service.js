// const sequelize = require('sequelize');
const { BlogPost, User, Category, PostCategory } = require('../models');
// const { validateCategories, associatePostCategory } = require('../utils/validateCategories');
// const validation = require('../middlewares/validPost');

const getAllPosts = async () => {
  const posts = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { 
        model: Category, 
        as: 'categories', 
        attributes: { exclude: ['PostCategory'] }, 
        through: { attributes: [] } },
    ],
  });

  return { status: 'SUCCESSFUL', data: posts };
};

const createPost = async (title, content, categoryIds, userId) => {
  const newPost = await BlogPost.create({ title, content, userId });
  await Promise.all(categoryIds.map(async (categoryId) => {
    const category = await PostCategory.create({ postId: newPost.id, categoryId });
    if (!category) return { status: 'INVALID_DATA', data: { message: 'Category does not exist' } };
  }));
  return { status: 'SUCCESSFUL', data: newPost };
};

module.exports = {
  getAllPosts,
  createPost,
};