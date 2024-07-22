const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '../db/Consecionario.json');

const getConcesionarios = () => {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
};

const saveConcesionarios = (concesionarios) => {
  fs.writeFileSync(filePath, JSON.stringify(concesionarios, null, 2));
};

module.exports = {
  getConcesionarios,
  saveConcesionarios
};
