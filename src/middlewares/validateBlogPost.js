const categoryService = require('../services/category.service');

const validateBlogPost = async (req, res, next) => {
  const { title, content, categoryIds } = req.body;

  if (!title || !content || !categoryIds.length) {
    return res.status('BAD_REQUEST').json({ message: 'Some required fields are missing' });
  }

  const categoriesExist = await Promise.all(categoryIds.map(async (categoryId) => {
    const category = await categoryService.getCategoryById(categoryId);
    return category !== null && category !== undefined;
  }));

  if (!categoriesExist.every((exists) => exists)) {
    return res.status('BAD_REQUEST').json({ message: 'one or more "categoryIds" not found' });
  }
  return next();
};

module.exports = validateBlogPost;