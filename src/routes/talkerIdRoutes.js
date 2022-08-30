const express = require('express');
const { readTalkers } = require('../server');

const talkerIdRouter = express.Router();

talkerIdRouter.get('/talker/:id', async (req, res) => {
  const numberId = req.params.id;
  console.log(numberId);
  const messageErro = { message: 'Pessoa palestrante não encontrada' };
  try {
    const talkers = await readTalkers();
    const talker = talkers.filter((item) => item.id === JSON.parse(numberId));
      if (talker.length === 0) {
        return res.status(404).json(messageErro);
      }
      return res.status(200).json(talker[0]);
   } catch (error) {
    return res.status(404).json(messageErro);
  }
});

module.exports = talkerIdRouter;