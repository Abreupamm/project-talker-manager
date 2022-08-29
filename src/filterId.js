const { readTalkers } = require('./allManagers');

const mesageError = { message: 'Pessoa palestrante não encontrada' };

const getId = async (numberId) => {
  try {
  const talkers = await readTalkers();
  const talker = talkers.filter((item) => item.id === numberId);
  if (talker.length === 0) {
    return mesageError;
  }
  return talker;
} catch (error) {
  return mesageError;
}
};

module.exports = {
  getId,
};