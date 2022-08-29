// https://www.horadecodar.com.br/2020/09/13/como-validar-email-com-javascript/

const { generateToken } = require('./generateToken');

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

const passwordValidation = (password) => {
  if (!password) {
    return {
      message: 'O campo "password" é obrigatório',
    };
  }
const size = password.toString();
if (size.length < 6) {
  return {
    message: 'O "password" deve ter pelo menos 6 caracteres',
  };
}
return 'valid password';
};

const validateLogin = (email, password) => {
  const passwordLogin = passwordValidation(password);
  const emailLogin = emailValidation(email);
  if (passwordLogin === 'valid password' && emailLogin === 'valid email') {
    return 'valid login';
  }
  return { passwordLogin, emailLogin };
};

const returnValidateLogin = (email, password) => {
  const login = validateLogin(email, password);

  if (login === 'valid login') {
    return [{ status: 200 }, { message: { token: generateToken() } }];
  }
  if (login.passwordLogin !== 'valid password') {
    return [{ status: 400 }, { message: login.passwordLogin }];
  }
  if (login.emailLogin !== 'valid email') {
    return [{ status: 400 }, { message: login.emailLogin }];
  }
};

module.exports = {
  returnValidateLogin,
};