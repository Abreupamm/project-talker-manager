const { rateValidation } = require('./rateValidation');
const { watchedAtValidation } = require('./watchedAtValidation');

const validObjTalk = (obj) => {
  const { rate, watchedAt } = obj;
  const rateValid = rateValidation(rate);
  const watchedAtValid = watchedAtValidation(watchedAt);
  if (rateValid !== 'valid') {
    return rateValid;
  }
  if (watchedAtValid !== 'valid') {
    return watchedAtValid;
  }
  return 'valid';
};

const talkValidation = (talk) => {
    if (!talk) {
   return { 
     status: 400, 
     message: { message: 'O campo "talk" é obrigatório' },
   };
  } 
  const objValid = validObjTalk(talk);
  if (objValid !== 'valid') {
    return objValid;
  }
  return 'valid';
};

module.exports = {
  talkValidation,
};
