const express = require('express');
const bodyParser = require('body-parser');

const loginRouter = require('./routes/loginRoutes');
const talkerIdRouter = require('./routes/talkerIdRoutes');
const talkerRouter = require('./routes/talkerRoutes');
const talkerSearchRouter = require('./routes/talkerSearchRoutes');

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

app.use(talkerSearchRouter);
app.use(talkerIdRouter);
app.use(loginRouter);
app.use(talkerRouter);
