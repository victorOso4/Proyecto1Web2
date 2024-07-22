const express = require('express');
const router = express.Router();
const LocalController = require('../Controller/LocalController');

router.post('/', LocalController.createLocales);
router.get('/:id', LocalController.getLocalById);
router.put('/:id', LocalController.updateLocal);
router.delete('/:id', LocalController.deleteLocal);

module.exports = router;
