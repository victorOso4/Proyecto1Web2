const { getInsumos, saveInsumos } = require('../Models/Insumo');

exports.createInsumo = (req, res) => {
  const insumos = getInsumos();
  const nuevoInsumo = {
    id: insumos.length + 1, 
    nombre: req.body.nombre,
    descripcion: req.body.descripcion,
    precio: req.body.precio,
    idAlmacen: req.body.idAlmacen
  };
  insumos.push(nuevoInsumo);
  saveInsumos(insumos);
  res.status(201).send(nuevoInsumo);
};

exports.getInsumos = (req, res) => {
  const insumos = getInsumos();
  res.status(200).send(insumos);
};

exports.getInsumoById = (req, res) => {
  const insumos = getInsumos();
  const insumo = insumos.find(insumo => insumo.id === parseInt(req.params.id));
  if (!insumo) {
    return res.status(404).send('Insumo no se encontro');
  }
  res.status(200).send(insumo);
};

exports.updateInsumo = (req, res) => {
  const insumos = getInsumos();
  const index = insumos.findIndex(insumo => insumo.id === parseInt(req.params.id));
  if (index === -1) {
    return res.status(404).send('Insumo no se encontro');
  }
  const updatedInsumo = {
    id: parseInt(req.params.id),
    nombre: req.body.nombre,
    descripcion: req.body.descripcion,
    precio: req.body.precio,
    idAlmacen: req.body.idAlmacen
  };
  insumos[index] = updatedInsumo;
  saveInsumos(insumos);
  res.status(200).send(updatedInsumo);
};

exports.deleteInsumo = (req, res) => {
  const insumos = getInsumos();
  const index = insumos.findIndex(insumo => insumo.id === parseInt(req.params.id));
  if (index === -1) {
    return res.status(404).send('Insumo no se encontro');
  }
  insumos.splice(index, 1);
  saveInsumos(insumos);
  res.status(200).send('Insumo se elimino correctamente');
};
