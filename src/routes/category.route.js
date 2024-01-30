const route = require('express').Router();
const { categoryController } = require('../controllers');
const authorization = require('../middlewares/authorization');

route.post('/categories', authorization.validateToken, categoryController.createCategory);

module.exports = route;