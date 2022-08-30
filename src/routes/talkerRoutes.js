const express = require('express');

const { getAllManagers } = require('../server');
const { createTalker } = require('../server');

const { nameValidation } = require('../middlewares /manager/nameValidation');
const { ageValidation } = require('../middlewares /manager/ageValidation');
const { talkValidation } = require('../middlewares /manager/talkValidation');
const { watchedAtValidation } = require('../middlewares /manager/watchedAtValidation');
const { rateValidation } = require('../middlewares /manager/rateValidation');
const { tokenValidation } = require('../middlewares /manager/tokenValidation');

const talkerRouter = express.Router();

talkerRouter.get('/talker', async (req, res) => {
  const talkers = await getAllManagers();
  return res.status(200).json(talkers);
  });
  
  talkerRouter.post('/talker',
    tokenValidation,
    nameValidation,
    ageValidation,
    talkValidation,
    watchedAtValidation,
    rateValidation,
    async (req, res) => {
    const newTalker = await createTalker(req.body);
    return res.status(201).json(newTalker);
  });
  
  module.exports = talkerRouter;