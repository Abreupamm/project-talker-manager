const express = require('express');
const bodyParser = require('body-parser');
const { getAllManagers } = require('./server');
const { getId } = require('./middlewares /filterId');
// const { returnValidateLogin } = require('./server');
const { returnValidateManager } = require('./server');
const loginRouter = require('./routes/loginRoutes');

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

app.get('/talker', async (req, res) => {
const talkers = await getAllManagers();
return res.status(200).json(talkers);
});

app.get('/talker/:id', async (req, res) => {
  const idFiltered = await getId(JSON.parse(req.params.id));
  if (idFiltered.length !== 1) {
    return res.status(404).json(idFiltered);
  }
  return res.status(200).json(idFiltered[0]);
});

app.use(loginRouter);

// app.post('/login', (req, res) => {
//   const { email } = req.body;
//   const { password } = req.body;
//   const login = returnValidateLogin(email, password);
//   return res.status(login[0].status).json(login[1].message);
// });

app.post('/talker', async (req, res) => {
  const talkers = await getAllManagers();
  talkers.push(req.body);
  const result = await returnValidateManager(req.body);
  return res.status(result.status).json(result.message);
});