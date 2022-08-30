const watchedAtValidation = (watchedAt) => {
  const status = 400;
  if (!watchedAt) {
    return {
      status,
      message: 'O campo "watchedAt" é obrigatório',
    };
  } 
  return 'valid';
};

module.exports = {
  watchedAtValidation,
};
