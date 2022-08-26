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

module.exports = {
  getAllManagers,
};