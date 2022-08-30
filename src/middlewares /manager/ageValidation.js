const ageValidation = (age) => {
  const status = 400;
  if (!age) {
    return {
      status,
      message: { message: 'O campo "age" é obrigatório' },
    };
  } 
  if (age < 18) {
    return {
      status,
      message: { message: 'A pessoa palestrante deve ser maior de idade' },
    };
  }
  return 'valid';
};

module.exports = {
  ageValidation,
};