const { passwordValidation } = require('./passwordValidation');
const { emailValidation } = require('./emailValidation');

const validateLogin = (email, password) => {
  const passwordLogin = passwordValidation(password);
  const emailLogin = emailValidation(email);
  if (passwordLogin === 'valid password' && emailLogin === 'valid email') {
    return 'valid login';
  }
  return { passwordLogin, emailLogin };
};

module.exports = {
  validateLogin,
};
