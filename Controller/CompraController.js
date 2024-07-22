const { getCompras, saveCompras } = require('../Models/Compra');

exports.createCompra = (req, res) => {
  const compras = getCompras();
  const nuevaCompra = {
    id: compras.length + 1,  
    fecha: req.body.fecha,
    idCliente: req.body.idCliente,
    idEmpleado: req.body.idEmpleado,
    precioTotal: req.body.precioTotal
  };
  compras.push(nuevaCompra);
  saveCompras(compras);
  res.status(201).send(nuevaCompra);
};

exports.getCompras = (req, res) => {
  const compras = getCompras();
  res.status(200).send(compras);
};

exports.getCompraById = (req, res) => {
  const compras = getCompras();
  const compra = compras.find(compra => compra.id === parseInt(req.params.id));
  if (!compra) {
    return res.status(404).send('Compra no se  encontro');
  }
  res.status(200).send(compra);
};

exports.updateCompra = (req, res) => {
  const compras = getCompras();
  const index = compras.findIndex(compra => compra.id === parseInt(req.params.id));
  if (index === -1) {
    return res.status(404).send('Compra no se encontro');
  }
  const updatedCompra = {
    id: parseInt(req.params.id),
    fecha: req.body.fecha,
    idCliente: req.body.idCliente,
    idEmpleado: req.body.idEmpleado,
    precioTotal: req.body.precioTotal
  };
  compras[index] = updatedCompra;
  saveCompras(compras);
  res.status(200).send(updatedCompra);
};

exports.deleteCompra = (req, res) => {
  const compras = getCompras();
  const index = compras.findIndex(compra => compra.id === parseInt(req.params.id));
  if (index === -1) {
    return res.status(404).send('Compra no se encontro');
  }
  compras.splice(index, 1);
  saveCompras(compras);
  res.status(200).send('Compra  se elimino correctamente');
};
