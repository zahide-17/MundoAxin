
const router = require('express').Router();
const {
  crearCategoria,
  obtenerCategoria,
  modificarCategoria,
  eliminarCategoria
} = require('../controllers/categoria')
var auth = require('./auth');

router.get('/', auth.opcional,obtenerCategoria)
router.post('/', auth.requerido, crearCategoria)
router.put('/:id',auth.requerido, modificarCategoria)
router.delete('/:id',auth.requerido, eliminarCategoria)

module.exports = router;