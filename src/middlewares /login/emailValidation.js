// https://www.horadecodar.com.br/2020/09/13/como-validar-email-com-javascript/

const emailValidation = (req, res, next) => {
  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ message: 'O campo "email" é obrigatório' });
  } 
  const re = /\S+@\S+\.\S+/;
  const validation = re.test(email);
  if (!validation) {
    return res.status(400).json({ message: 'O "email" deve ter o formato "email@email.com"' });
  }
  next();
};

module.exports = {
  emailValidation,
};
