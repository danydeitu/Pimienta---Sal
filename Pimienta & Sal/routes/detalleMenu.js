var express = require('express');
var router = express.Router();

const {detalle} = require('../controllers/detalleController')
/* GET users listing. */
router.get('/plato/:id', detalle);

module.exports = router;