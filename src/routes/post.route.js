const route = require('express').Router();
const { postController } = require('../controllers');
const authorization = require('../middlewares/authorization');

route.get('/post', authorization.validateToken, postController.getAllPosts);
route.post('/', authorization.validateToken, postController.createPost);
route.get('/post/:id', authorization.validateToken, postController.getPostById);
route.put('/post/:id', authorization.validateToken, postController.updatePost);

module.exports = route;