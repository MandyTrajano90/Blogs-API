const route = require('express').Router();
const { postController } = require('../controllers');
const authorization = require('../middlewares/authorization');
const validateBlogPost = require('../middlewares/validateBlogPost');
const validation = require('../middlewares/validationInputs');

route.get('/post', authorization.validateToken, postController.getAllPosts);
route.post(
  '/post',
  authorization.validateToken,
  validateBlogPost,
  // validation.newPostValidation,
  postController.createPost,
);
route.get('/post/:id', authorization.validateToken, postController.getPostById);
route.put('/post/:id', authorization.validateToken, postController.updatePost);

module.exports = route;