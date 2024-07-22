const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '../db/Insumo.json');

const getInsumos = () => {
  try {
    const data = fs.readFileSync(dataPath, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
};

const saveInsumos = (insumos) => {
  try {
    const data = JSON.stringify(insumos, null, 2);
    fs.writeFileSync(dataPath, data);
  } catch (error) {
    console.error('Error al guardar  insumos:', error);
  }
};

module.exports = {
  getInsumos,
  saveInsumos
};
