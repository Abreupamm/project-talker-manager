const nameValidation = (name) => {
  const status = 400;
  if (!name) {
    return {
      status,
      message: 'O campo "name" é obrigatório',
    };
  } 
  const size = name.toString();
  if (size.length < 3) {
    return {
      status,
      message: 'O "name" deve ter pelo menos 3 caracteres',
    };
  }
  return 'valid';
};

module.exports = {
  nameValidation,
};
