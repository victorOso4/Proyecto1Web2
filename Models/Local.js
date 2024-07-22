const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '../db/Local.json');

const getLocales = () => {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
};

const saveLocales = (Locales) => {
  fs.writeFileSync(filePath, JSON.stringify(Locales, null, 2));
};

module.exports = {
  getLocales,
  saveLocales
};
