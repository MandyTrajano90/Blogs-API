const route = require('express').Router();
const { userController } = require('../controllers');

route.post('/login', userController.getByEmail);

module.exports = route;