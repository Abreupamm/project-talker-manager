const express = require('express');
const bodyParser = require('body-parser');
const { getAllManagers } = require('./allManagers');
const { getId } = require('./filterId');
const { generateToken } = require('./generateToken');

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

app.post('/login', (req, res) => {
  const token = { token: generateToken() };
  return res.status(200).json(token);
});
