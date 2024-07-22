const { getEmpleados, saveEmpleados } = require('../Models/Empleado');

exports.createEmpleado = (req, res) => {
  const empleados = getEmpleados();
  const nuevoEmpleado = {
    id: empleados.length + 1,  
    nombre: req.body.nombre,
    cargo: req.body.cargo,
    salario: req.body.salario,
    idConcesionario: req.body.idConcesionario
  };
  empleados.push(nuevoEmpleado);
  saveEmpleados(empleados);
  res.status(201).send(nuevoEmpleado);
};

exports.getEmpleados = (req, res) => {
  const empleados = getEmpleados();
  res.status(200).send(empleados);
};

exports.getEmpleadoById = (req, res) => {
  const empleados = getEmpleados();
  const empleado = empleados.find(empleado => empleado.id === parseInt(req.params.id));
  if (!empleado) {
    return res.status(404).send('Empleado no se encontro');
  }
  res.status(200).send(empleado);
};

exports.updateEmpleado = (req, res) => {
  const empleados = getEmpleados();
  const index = empleados.findIndex(empleado => empleado.id === parseInt(req.params.id));
  if (index === -1) {
    return res.status(404).send('Empleado no se encontro');
  }
  const updatedEmpleado = {
    id: parseInt(req.params.id),
    nombre: req.body.nombre,
    cargo: req.body.cargo,
    salario: req.body.salario,
    idConcesionario: req.body.idConcesionario
  };
  empleados[index] = updatedEmpleado;
  saveEmpleados(empleados);
  res.status(200).send(updatedEmpleado);
};

exports.deleteEmpleado = (req, res) => {
  const empleados = getEmpleados();
  const index = empleados.findIndex(empleado => empleado.id === parseInt(req.params.id));
  if (index === -1) {
    return res.status(404).send('Empleado no  se encontro');
  }
  empleados.splice(index, 1);
  saveEmpleados(empleados);
  res.status(200).send('Empleado se elimino correctamente');
};
