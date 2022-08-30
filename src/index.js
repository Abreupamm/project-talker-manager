const express = require('express');
const bodyParser = require('body-parser');
// const { getAllManagers } = require('./server');
// const { getId } = require('./middlewares /getTalkerId');
// const { returnValidateManager } = require('./server');
const loginRouter = require('./routes/loginRoutes');
const talkerIdRouter = require('./routes/talkerIdRoutes');

const app = express();
app.use(bodyParser.json());
app.use(express.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.listen(PORT, () => {
  console.log('Online');
});

app.use(talkerIdRouter);
app.use(loginRouter);
