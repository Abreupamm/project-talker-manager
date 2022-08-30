const rateValidation = (rate) => {
  if (!rate) {
    return {
      status: 400,
      message: { message: 'O campo "rate" é obrigatório' },
    };
  } 
  if (rate > 0 && rate < 6) {
    return 'valid';
  }
  return {
    status: 400,
    message: { message: 'O campo "rate" deve ser um inteiro de 1 à 5' },
  };
};

module.exports = {
  rateValidation,
};
