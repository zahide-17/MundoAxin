
const router = require('express').Router();
const {
  crearTienda,
  obtenerTiendas,
  modificarTienda,
  eliminarTienda
} = require('../controllers/tienda')
var auth = require('./auth');

router.get('/', auth.opcional,obtenerTiendas)
router.get('/:id', auth.opcional, obtenerTiendas)// nuevo endpoint con todos los detalles de mascota
router.post('/', auth.requerido, crearTienda)
router.put('/:id',auth.requerido, modificarTienda)
router.delete('/:id',auth.requerido, eliminarTienda)

module.exports = router;