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

module.exports = {
  passwordValidation,
};