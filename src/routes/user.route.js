const route = require('express').Router();
const { userController } = require('../controllers');

route.post('/user', userController.createUser);

module.exports = route;