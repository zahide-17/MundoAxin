const router = require('express').Router();
const {
  crearSucursal,
  obtenerSucursal,
  modificarSucursal,
  eliminarSucursal
} = require('../controllers/sucursal')
var auth = require('./auth');

router.get('/', auth.opcional,obtenerSucursal)
router.get('/:id', auth.opcional, obtenerSucursal)// nuevo endpoint con todos los detalles de mascota
router.post('/', auth.requerido, crearSucursal)
router.put('/:id',auth.requerido, modificarSucursal)
router.delete('/:id',auth.requerido, eliminarSucursal)

module.exports = router;