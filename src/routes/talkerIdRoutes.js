const express = require('express');
const { getAllManagers } = require('../assistant');
const { writeTalkes } = require('../assistant');

const { tokenValidation } = require('../middlewares /manager/tokenValidation');
const { nameValidation } = require('../middlewares /manager/nameValidation');
const { ageValidation } = require('../middlewares /manager/ageValidation');
const { talkValidation } = require('../middlewares /manager/talkValidation');
const { watchedAtValidation } = require('../middlewares /manager/watchedAtValidation');
const { rateValidation } = require('../middlewares /manager/rateValidation');

const talkerIdRouter = express.Router();

talkerIdRouter.get('/talker/:id', async (req, res) => {
  const messageErro = { message: 'Pessoa palestrante não encontrada' };
  try {
    const talkers = await getAllManagers();
    const talker = talkers.filter((item) => item.id === JSON.parse(req.params.id));
      if (talker.length === 0) {
        return res.status(404).json(messageErro);
      }
      return res.status(200).json(talker[0]);
   } catch (error) {
    return res.status(404).json(messageErro);
  }
});

talkerIdRouter.put('/talker/:id',
tokenValidation,
nameValidation,
ageValidation,
talkValidation,
watchedAtValidation,
rateValidation,
async (req, res) => {
  const { id } = req.params;
  const { name, age, talk } = req.body;
  const talkers = await getAllManagers();
  let update;
  for (let i = 0; i < talkers.length; i += 1) {
    const newTalk = talkers[i];
    if (newTalk.id === Number(id)) {
      newTalk.name = name;
      newTalk.age = age;
      newTalk.talk = talk;
      update = newTalk;
    }
  }
  writeTalkes(talkers);
  return res.status(200).json(update);
});

talkerIdRouter.delete('/talker/:id', tokenValidation, async (req, res) => {
  const { id } = req.params;
  const talkers = await getAllManagers();
  const index = talkers.findIndex((talker) => talker.id === Number(id));
  talkers.splice(index, 1);
  writeTalkes(talkers);
  return res.status(204).end();
});

module.exports = talkerIdRouter;