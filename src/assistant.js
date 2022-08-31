const fs = require('fs').promises;
const { join } = require('path');

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
  const talkers = await getAllManagers();
  const newTalker = {
    id: talkers.length + 1,
    ...talk,
  };
  talkers.push(newTalker);
  writeTalkes(talkers);
    return newTalker;
};

const getQuerySearch = async (query) => {
  const talkers = await getAllManagers();
  const result = talkers.filter((talker) => talker.name.includes(query));
  console.log(result);
  return result;
};

module.exports = {
  readTalkers,
  getAllManagers,
  createTalker,
  writeTalkes,
  getQuerySearch,
};