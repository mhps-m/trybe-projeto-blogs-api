const express = require('express');
require('express-async-errors');
const { errorHandler } = require('./middlewares');
const routes = require('./routes');
// ...

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

// ...

app.post('/login', routes.login);
app.post('/user', routes.createUser);

app.use(errorHandler);
// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
