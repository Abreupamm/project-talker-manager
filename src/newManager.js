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