const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '../db/Empleado.json');

const getEmpleados = () => {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
};

const saveEmpleados = (empleados) => {
  fs.writeFileSync(filePath, JSON.stringify(empleados, null, 2));
};

module.exports = {
  getEmpleados,
  saveEmpleados
};
