const express = require('express');
const router = express.Router();
const CompraControllers = require('../Controller/CompraController');


router.post('/', CompraControllers.createCompra);
router.get('/', CompraControllers.getCompras);
router.get('/:id', CompraControllers.getCompraById);
router.put('/:id', CompraControllers.updateCompra);
router.delete('/:id', CompraControllers.deleteCompra);

module.exports = router;
