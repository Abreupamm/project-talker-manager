const watchedAtValidation = (watchedAt) => {
  if (!watchedAt) {
    return {
      status: 400,
      message: { message: 'O campo "watchedAt" é obrigatório' },
    };
  } 
  const isFormatDate = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i;

  if (!isFormatDate.test(watchedAt)) {
    return { 
      status: 400,
      message: { message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' },
    };
  }
return 'valid';
};

module.exports = {
  watchedAtValidation,
};