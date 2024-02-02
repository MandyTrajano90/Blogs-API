const express = require('express');
const { loginRoute, userRoute, categoryRoute, postRoute } = require('./routes');

const app = express();

app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

app.use('/', loginRoute);
app.use('/', userRoute);
app.use('/', categoryRoute);
app.use('/', postRoute);

module.exports = app;
