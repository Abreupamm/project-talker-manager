const rateValidation = (rate) => {
  const status = 400;
  if (!rate) {
    return {
      status,
      message: 'O campo "rate" é obrigatório',
    };
  } 
  if (rate > 0 && rate < 6) {
    return 'valid';
  }
  return {
    status,
    message: 'O campo "rate" deve ser um inteiro de 1 à 5',
  };
};

module.exports = {
  rateValidation,
};
