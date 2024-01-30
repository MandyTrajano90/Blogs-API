const route = require('express').Router();
const { userController } = require('../controllers');
const authorization = require('../middlewares/authorization');

route.post('/user', userController.createUser);
route.get('/user', authorization.validateToken, userController.getAll);

module.exports = route;