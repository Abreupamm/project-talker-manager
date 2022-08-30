const nameValidation = (name) => {
  if (!name) {
    return {
      message: 'O campo "name" é obrigatório',
    };
  } 
  const size = name.toString();
  if (size.length < 3) {
    return {
      message: 'O "name" deve ter pelo menos 3 caracteres',
    };
  }
  return 'valid name';
};

const ageValidation = (age) => {
  if (!age) {
    return {
      message: 'O campo "age" é obrigatório',
    };
  } 
  const size = age.toString();
  if (size.length < 18) {
    return {
      message: 'A pessoa palestrante deve ser maior de idade',
    };
  }
  return 'valid name';
};

const talkValidation = (talk) => {
  if (!talk) {
    return {
      message: 'O campo "talk" é obrigatório',
    };
  } 
  if (talk.watcherAt && talk.rate) {
    return 'valid talk';
  }
  return 'invalid talk';
};

const watchedAtValidation = (watchedAt) => {
  if (!watchedAt) {
    return {
      message: 'O campo "watchedAt" é obrigatório',
    };
  } 
  const isValidDate = Date.parse(watchedAt);
  console.log(isValidDate);
};

const rateValifadion = (rate) => {
  if (!rate) {
    return {
      message: 'O campo "watchedAt" é obrigatório',
    };
  } 
  if (rate < 6) {
    return {
      message: 'O campo "rate" deve ser um inteiro de 1 à 5';
    }
  }
};