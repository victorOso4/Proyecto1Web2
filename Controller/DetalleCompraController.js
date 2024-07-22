const { getDetalleVentas, saveDetalleVentas } = require('../Models/DetalleCompra');

exports.createDetalleVenta = (req, res) => {
  const detalleVentas = getDetalleVentas();
  const nuevoDetalleVenta = {
    id: detalleVentas.length + 1,  
    idCompra: req.body.idCompra,
    idProducto: req.body.idProducto,
    tipoProducto: req.body.tipoProducto,
    cantidad: req.body.cantidad,
    precioUnitario: req.body.precioUnitario,
    precioTotal: req.body.cantidad * req.body.precioUnitario
  };
  detalleVentas.push(nuevoDetalleVenta);
  saveDetalleVentas(detalleVentas);
  res.status(201).send(nuevoDetalleVenta);
};

exports.getDetalleVentas = (req, res) => {
  const detalleVentas = getDetalleVentas();
  res.status(200).send(detalleVentas);
};

exports.getDetalleVentaById = (req, res) => {
  const detalleVentas = getDetalleVentas();
  const detalleVenta = detalleVentas.find(detalle => detalle.id === parseInt(req.params.id));
  if (!detalleVenta) {
    return res.status(404).send('Detalle de la venta no  se encontro');
  }
  res.status(200).send(detalleVenta);
};

exports.updateDetalleVenta = (req, res) => {
  const detalleVentas = getDetalleVentas();
  const index = detalleVentas.findIndex(detalle => detalle.id === parseInt(req.params.id));
  if (index === -1) {
    return res.status(404).send('Detalle de la venta no se encontro');
  }
  const updatedDetalleVenta = {
    id: parseInt(req.params.id),
    idCompra: req.body.idCompra,
    idProducto: req.body.idProducto,
    tipoProducto: req.body.tipoProducto,
    cantidad: req.body.cantidad,
    precioUnitario: req.body.precioUnitario,
    precioTotal: req.body.cantidad * req.body.precioUnitario
  };
  detalleVentas[index] = updatedDetalleVenta;
  saveDetalleVentas(detalleVentas);
  res.status(200).send(updatedDetalleVenta);
};

exports.deleteDetalleVenta = (req, res) => {
  const detalleVentas = getDetalleVentas();
  const index = detalleVentas.findIndex(detalle => detalle.id === parseInt(req.params.id));
  if (index === -1) {
    return res.status(404).send('Detalle de la venta no se encontro');
  }
  detalleVentas.splice(index, 1);
  saveDetalleVentas(detalleVentas);
  res.status(200).send('Detalle de la venta eliminado correctamente');
};
