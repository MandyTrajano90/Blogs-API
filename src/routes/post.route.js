const route = require('express').Router();
const { postController } = require('../controllers');
const authorization = require('../middlewares/authorization');

route.get('/post', authorization.validateToken, postController.getAllPosts);
route.get('/post', authorization.validateToken, postController.createPost);

module.exports = route;