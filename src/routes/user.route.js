const route = require('express').Router();
const { userController } = require('../controllers');
const authorization = require('../middlewares/authorization');

route.post('/user', userController.createUser);
route.get('/user', authorization.validateToken, userController.getAll);
route.get('/user/:id', authorization.validateToken, userController.getById);

module.exports = route;