const fs = require('fs').promises;
const { join } = require('path');

const { nameValidation } = require('./middlewares /manager/nameValidation');
const { ageValidation } = require('./middlewares /manager/ageValidation');
const { talkValidation } = require('./middlewares /manager/talkValidation');

const pathTalkers = './talker.json';

const readTalkers = async () => {
  try {
    const talkers = await fs.readFile(join(__dirname, pathTalkers), 'utf-8');
    return JSON.parse(talkers);
  } catch (error) {
    return [];
  }
};

const getAllManagers = async () => {
  const allManagers = await readTalkers();
  return allManagers;
};

const writeTalkes = async (file) => {
  const newFile = JSON.stringify(file);
  await fs.writeFile(join(__dirname, pathTalkers), newFile);
};

const createTalker = async (talk) => {
  const talkers = await readTalkers();
  const newTalker = {
    id: talkers.length + 1,
    ...talk,
  };
  talkers.push(newTalker);
  writeTalkes(talkers);
    return newTalker;
};

const returnValidateManager = async (manager) => {
  const nameManager = nameValidation(manager.name);
  const ageManager = ageValidation(manager.age);
  const talkManager = talkValidation(manager.talk);
  const valitationList = [nameManager, ageManager, talkManager];
  const result = valitationList.filter((item) => item !== 'valid');
  if (result.length === 0) {
    const newTalker = await createTalker(manager);
    return {
      status: 201,
      message: newTalker,
    };
  }
  return result[0];
};

module.exports = {
  readTalkers,
  getAllManagers,
  returnValidateManager,
};