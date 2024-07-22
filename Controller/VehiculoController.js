const { getVehiculos, saveVehiculos } = require('../Models/Vehiculo');

exports.createVehiculo = (req, res) => {
  const vehiculos = getVehiculos();
  const nuevoVehiculo = {
    id: vehiculos.length + 1,
    marca: req.body.marca,
    modelo: req.body.modelo,
    año: req.body.año,
    precio: req.body.precio,
    idConcesionario: req.body.idConcesionario
  };
  vehiculos.push(nuevoVehiculo);
  saveVehiculos(vehiculos);
  res.status(201).send(nuevoVehiculo);
};

exports.getVehiculos = (req, res) => {
  const vehiculos = getVehiculos();
  res.status(200).send(vehiculos);
};

exports.getVehiculoById = (req, res) => {
  const vehiculos = getVehiculos();
  const vehiculo = vehiculos.find(vehiculo => vehiculo.id === parseInt(req.params.id));
  if (!vehiculo) {
    return res.status(404).send('Vehículo no se encontro');
  }
  res.status(200).send(vehiculo);
};

exports.updateVehiculo = (req, res) => {
  const vehiculos = getVehiculos();
  const index = vehiculos.findIndex(vehiculo => vehiculo.id === parseInt(req.params.id));
  if (index === -1) {
    return res.status(404).send('Vehículo no se  encontro');
  }
  const updatedVehiculo = {
    id: parseInt(req.params.id),
    marca: req.body.marca,
    modelo: req.body.modelo,
    año: req.body.año,
    precio: req.body.precio,
    idConcesionario: req.body.idConcesionario
  };
  vehiculos[index] = updatedVehiculo;
  saveVehiculos(vehiculos);
  res.status(200).send(updatedVehiculo);
};

exports.deleteVehiculo = (req, res) => {
  const vehiculos = getVehiculos();
  const index = vehiculos.findIndex(vehiculo => vehiculo.id === parseInt(req.params.id));
  if (index === -1) {
    return res.status(404).send('Vehículo no se encontro');
  }
  vehiculos.splice(index, 1);
  saveVehiculos(vehiculos);
  res.status(200).send('Vehículo se eliminado correctamente');
};
