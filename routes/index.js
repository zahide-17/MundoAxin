var router = require('express').Router();

router.get('/', (req, res)=>{
  res.send('welcome to adoptapet api');
});

router.use('/usuarios', require('./usuarios'));
router.use('/mascotas', require('./mascotas'));
router.use('/solicitudes', require('./solicitudes'));
router.use('/tiendas', require('./tienda'));
router.use('/sucursal', require('./sucursal'));
router.use('/categoria', require('./categoria'));
router.use('/articulo', require('./articulo'));


module.exports = router;
