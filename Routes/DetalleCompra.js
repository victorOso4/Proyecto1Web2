const express = require('express');
const router = express.Router();
const detalleCompraController = require('../Controller/detalleCompraController');


router.post('/', detalleCompraController.createDetalleVenta);
router.get('/', detalleCompraController.getDetalleVentas);
router.get('/:id', detalleCompraController.getDetalleVentaById);
router.put('/:id', detalleCompraController.updateDetalleVenta);
router.delete('/:id', detalleCompraController.deleteDetalleVenta);

module.exports = router;
