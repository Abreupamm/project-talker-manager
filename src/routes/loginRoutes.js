const express = require('express');
const { passwordValidation } = require('../middlewares /login/passwordValidation');
const { emailValidation } = require('../middlewares /login/emailValidation');
const { generateToken } = require('../middlewares /login/generateToken');

const loginRouter = express.Router();

loginRouter.post('/login', emailValidation, passwordValidation, (req, res) => {
  const token = generateToken();
  return res.status(200).json({ token });
});

module.exports = loginRouter;