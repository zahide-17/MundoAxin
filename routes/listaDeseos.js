const router = require('express').Router();
const {
  crearListaDeseos,
  obtenerListaDeseos,
  modificarListaDeseos,
  eliminarListaDeseos
} = require('../controllers/listaDeseos')
var auth = require('./auth');

router.get('/', auth.opcional, obtenerListaDeseos)
router.get('/:id', auth.opcional, obtenerListaDeseos)// nuevo endpoint con todos los detalles de mascota
router.post('/', auth.requerido, crearListaDeseos)
router.put('/:id',auth.requerido, modificarListaDeseos)
router.delete('/:id',auth.requerido, eliminarListaDeseos)

module.exports = router;