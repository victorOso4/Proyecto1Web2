const express = require('express');
const router = express.Router();
const vehiculoController = require('../Controller/vehiculoController');

router.post('/', vehiculoController.createVehiculo);
router.get('/', vehiculoController.getVehiculos);
router.get('/:id', vehiculoController.getVehiculoById);
router.put('/:id', vehiculoController.updateVehiculo);
router.delete('/:id', vehiculoController.deleteVehiculo);

module.exports = router;
