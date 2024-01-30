const route = require('express').Router();
const { categoryController } = require('../controllers');
const authorization = require('../middlewares/authorization');

route.post('/categories', authorization.validateToken, categoryController.createCategory);

route.get('/categories', authorization.validateToken, categoryController.getAll);

module.exports = route;