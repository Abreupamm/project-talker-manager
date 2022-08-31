const express = require('express');

const talkerSearchRouter = express.Router();
const { tokenValidation } = require('../middlewares /manager/tokenValidation');
const { getAllManagers } = require('../assistant');
const { getQuerySearch } = require('../assistant');

talkerSearchRouter.get('/talker/search?', tokenValidation, async (req, res) => {
  const { q } = req.query;
  if (!q) {
    const talkers = await getAllManagers();
    return res.status(200).json(talkers);
  }
  const talkerByQuery = await getQuerySearch(q);
  return res.status(200).json(talkerByQuery);
});

module.exports = talkerSearchRouter;