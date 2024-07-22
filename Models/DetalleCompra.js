const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '../db/DetalleCompra.json');

const getDetalleCompras = () => {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
};

const saveDetalleCompras = (detalleCompras) => {
  fs.writeFileSync(filePath, JSON.stringify(detalleCompras, null, 2));
};

module.exports = {
  getDetalleCompras,
  saveDetalleCompras
};