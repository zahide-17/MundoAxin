const router = require('express').Router();
const {
  crearProducto,
  obtenerProducto,
  modificarProducto,
  eliminarProducto
} = require('../controllers/producto')
var auth = require('./auth');

router.get('/', auth.opcional, obtenerProducto)
router.get('/:id', auth.opcional, obtenerProducto)// nuevo endpoint con todos los detalles de mascota
router.post('/', auth.requerido, crearProducto)
router.put('/:id',auth.requerido, modificarProducto)
router.delete('/:id',auth.requerido, eliminarProducto)

module.exports = router;