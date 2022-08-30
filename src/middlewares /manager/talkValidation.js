const talkValidation = (talk) => {
  const status = 400;
  if (!talk) {
    return {
      status,
      message: 'O campo "talk" é obrigatório',
    };
  } 
  if (talk.watchedAt && talk.rate) {
    return 'valid';
  }
  return {
    status,
    message: 'campo talk deverá ser um objeto com as chaves watchedAt e rate',
  };
};

module.exports = {
  talkValidation,
};
