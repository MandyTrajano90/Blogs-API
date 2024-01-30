const express = require('express');
const userController = require('./controllers/user.controller');

const app = express();

app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

app.use('/login', userController.getByEmail);

module.exports = app;
