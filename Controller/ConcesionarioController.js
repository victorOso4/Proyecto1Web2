const { getConcesionarios, saveConcesionarios } = require('../Models/Consecionario');

exports.createConcesionario = (req, res) => {
  const concesionarios = getConcesionarios();
  const nuevoConcesionario = {
    id: concesionarios.length + 1,
    nombre: req.body.nombre,
    direccion: req.body.direccion
  };
  concesionarios.push(nuevoConcesionario);
  saveConcesionarios(concesionarios);
  res.status(201).send(nuevoConcesionario);
};

exports.getConcesionarios = (req, res) => {
  const concesionarios = getConcesionarios();
  res.status(200).send(concesionarios);
};

exports.getConcesionarioById = (req, res) => {
  const concesionarios = getConcesionarios();
  const concesionario = concesionarios.find(concesionario => concesionario.id === parseInt(req.params.id));
  if (!concesionario) {
    return res.status(404).send('Concesionario no  se encontro');
  }
  res.status(200).send(concesionario);
};

exports.updateConcesionario = (req, res) => {
  const concesionarios = getConcesionarios();
  const index = concesionarios.findIndex(concesionario => concesionario.id === parseInt(req.params.id));
  if (index === -1) {
    return res.status(404).send('Concesionario no se encontro');
  }
  const updatedConcesionario = {
    id: parseInt(req.params.id),
    nombre: req.body.nombre,
    direccion: req.body.direccion
    
  };
  concesionarios[index] = updatedConcesionario;
  saveConcesionarios(concesionarios);
  res.status(200).send(updatedConcesionario);
};

exports.deleteConcesionario = (req, res) => {
  const concesionarios = getConcesionarios();
  const index = concesionarios.findIndex(concesionario => concesionario.id === parseInt(req.params.id));
  if (index === -1) {
    return res.status(404).send('Concesionario no se encontro');
  }
  concesionarios.splice(index, 1);
  saveConcesionarios(concesionarios);
  res.status(200).send('Concesionario se elimino correctamente');
};
