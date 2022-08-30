const fs = require('fs').promises;
const { join } = require('path');
const { generateToken } = require('./middlewares /login/generateToken');
const { validateLogin } = require('./middlewares /login/validateLogin');
const { nameValidation } = require('./middlewares /manager/nameValidation');
const { ageValidation } = require('./middlewares /manager/ageValidation');
const { talkValidation } = require('./middlewares /manager/talkValidation');
// const { rateValidation } = require('./middlewares /manager/rateValidation');
// const { watchedAtValidation } = require('./middlewares /manager/watchedAtValidation');

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

const returnValidateLogin = (email, password) => {
  const login = validateLogin(email, password);

  if (login === 'valid login') {
    return [{ status: 200 }, { message: { token: generateToken() } }];
  }
  if (login.passwordLogin !== 'valid password') {
    return [{ status: 400 }, { message: login.passwordLogin }];
  }
  if (login.emailLogin !== 'valid email') {
    return [{ status: 400 }, { message: login.emailLogin }];
  }
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
  // const watchedAtManager = watchedAtValidation(manager.talk.watchedAt);
  // const rateManager = rateValidation(manager.talk.rate);
  const valitationList = [nameManager, ageManager, talkManager];
  const result = valitationList.filter((item) => item !== 'valid');
  if (result.length === 0) {
    const newTalker = await createTalker(manager);
    console.log(newTalker);
        return {
      status: 201,
      message: newTalker,
    };
  }
  return result[0];
};

module.exports = {
  readTalkers,
  returnValidateLogin,
  getAllManagers,
  returnValidateManager,
};