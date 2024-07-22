const { getClientes, saveClientes } = require('../Models/Cliente');

exports.createCliente = (req, res) => {
  const clientes = getClientes();
  const nuevoCliente = {
    id: clientes.length + 1,
    nombre: req.body.nombre,
    direccion: req.body.direccion,
    idConcesionario: req.body.idConcesionario
  };
  clientes.push(nuevoCliente);
  saveClientes(clientes);
  res.status(201).send(nuevoCliente);
};

exports.getClientes = (req, res) => {
  const clientes = getClientes();
  res.status(200).send(clientes);
};

exports.getClienteById = (req, res) => {
  const clientes = getClientes();
  const cliente = clientes.find(cliente => cliente.id === parseInt(req.params.id));
  if (!cliente) {
    return res.status(404).send('Cliente no se encontro');
  }
  res.status(200).send(cliente);
};

exports.updateCliente = (req, res) => {
  const clientes = getClientes();
  const index = clientes.findIndex(cliente => cliente.id === parseInt(req.params.id));
  if (index === -1) {
    return res.status(404).send('Cliente no se  encontro');
  }
  const updatedCliente = {
    id: parseInt(req.params.id),
    nombre: req.body.nombre,
    direccion: req.body.direccion,
    idConcesionario: req.body.idConcesionario
  };
  clientes[index] = updatedCliente;
  saveClientes(clientes);
  res.status(200).send(updatedCliente);
};

exports.deleteCliente = (req, res) => {
  const clientes = getClientes();
  const index = clientes.findIndex(cliente => cliente.id === parseInt(req.params.id));
  if (index === -1) {
    return res.status(404).send('Cliente no se  encontro');
  }
  clientes.splice(index, 1);
  saveClientes(clientes);
  res.status(200).send('Cliente se elimino correctamente');
};
