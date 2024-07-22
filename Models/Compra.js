const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '../db/Compra.json');

const getCompras = () => {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
};

const saveCompras = (compras) => {
  fs.writeFileSync(filePath, JSON.stringify(compras, null, 2));
};

module.exports = {
  getCompras,
  saveCompras
};
