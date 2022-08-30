// https://www.horadecodar.com.br/2020/09/13/como-validar-email-com-javascript/

const emailValidation = (email) => {
  if (!email) {
    return {
      message: 'O campo "email" é obrigatório',
    };
  } 
  const re = /\S+@\S+\.\S+/;
  const validation = re.test(email);
  if (!validation) {
    return {
      message: 'O "email" deve ter o formato "email@email.com"',
    };
  }
  return 'valid email';
};

module.exports = {
  emailValidation,
};
