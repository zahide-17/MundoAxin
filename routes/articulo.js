const router = require('express').Router();
const {
  crearArticulo,
  obtenerArticulo,
  modificarArticulo,
  eliminarArticulo
} = require('../controllers/articulo')
var auth = require('./auth');

router.get('/', auth.opcional,obtenerArticulo)
router.get('/:id', auth.opcional, obtenerArticulo)// nuevo endpoint con todos los detalles de mascota
router.post('/', auth.requerido, crearArticulo)
router.put('/:id',auth.requerido, modificarArticulo)
router.delete('/:id',auth.requerido, eliminarArticulo)

module.exports = router;