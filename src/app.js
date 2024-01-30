const express = require('express');
const { loginRoute, userRoute, categoryRoute } = require('./routes');

const app = express();

app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

app.use('/', loginRoute);
app.use('/', userRoute);
app.use('/', categoryRoute);

module.exports = app;
