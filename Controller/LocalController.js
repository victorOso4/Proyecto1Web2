const { getLocales, saveLocales } = require('../Models/Local');

exports.createLocales = (req, res) => {
  const Locales = getLocales();
  const nuevoLocal = {
    id: Locales.length + 1,
    nombre: req.body.nombre,
    ubicacion: req.body.ubicacion
  };
  Locales.push(nuevoLocal);
  saveLocales(Locales);
  res.status(201).send(nuevoLocal);
};

exports.getLocalById = (req, res) => {
  const Locales = getLocales();
  res.status(200).send(Locales);
};

exports.getLocalById = (req, res) => {
  const Locales = getLocales();
  const Local = Locales.find(Local => Local.id === parseInt(req.params.id));
  if (!Local) {
    return res.status(404).send('Local no se encontro');
  }
  res.status(200).send(Local);
};

exports.updateLocal = (req, res) => {
  const Local = getLocales();
  const index = Locales.findIndex(Local => Local.id === parseInt(req.params.id));
  if (index === -1) {
    return res.status(404).send('Local no se encontrado');
  }
  const updatedLocal = {
    id: parseInt(req.params.id),
    nombre: req.body.nombre,
    ubicacion: req.body.ubicacion
  };
  Locales[index] = updatedLocal;
  saveLocales(Locales);
  res.status(200).send(updatedLocal);
};

exports.deleteLocal = (req, res) => {
  const Locales = getLocales();
  const index = Locales.findIndex(Local => Local.id === parseInt(req.params.id));
  if (index === -1) {
    return res.status(404).send('Local no se encontro');
  }
  Locales.splice(index, 1);
  saveLocales(Locales);
  res.status(200).send('Local eliminado correctamente');
};
