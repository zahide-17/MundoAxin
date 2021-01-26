const mongoose = require('mongoose')
const Producto = mongoose.model('Producto')

function crearProducto(req, res, next) {
  var producto = new Producto(req.body)
  producto.save().then(producto => {
    res.status(201).send(producto)
  }).catch(next)
}

function obtenerProducto(req, res, next) {
  if(req.params.id){
    Producto.findById(req.params.id)
			.then(producto => {
	      res.send(producto)
	    }).catch(next)
  } else {
    Producto.find().then(producto=>{
      res.send(producto)
    }).catch(next)
  }
}

function modificarProducto(req, res, next) {
  console.log("Producto a modificar: " + req.params.id ) //req.param.id - Tienda en uri

  Producto.findById(req.params.id).then(producto => { //Busca la tienda que se recibe como parámetro.

    if (!producto) { return res.sendStatus(401); }   //Si no se encuentra tienda, retorna estaus 401.---

    if (typeof nuevaInfo.imagen !== 'undefined')
      producto.imagen = nuevaInfo.imagen
    if (typeof nuevaInfo.imagen !== 'undefined')
      producto.imagen = nuevaInfo.imagen
    if (typeof nuevaInfo.precio !== 'undefined')
      producto.precio = nuevaInfo.precio
      producto.save().then(updatedProducto => {
      res.status(201).json(updatedProducto.publicData())
    }).catch(next)
  })
}

function eliminarProducto(req, res) {
  // únicamente borra a su propio tienda obteniendo el id del token
  Producto.findById(req.params.id).then(producto => {

    if (!producto) { return res.sendStatus(401); }
      producto.deleteOne();
      res.status(200).send(`Producto ${req.params.id} eliminado. ${nombreProducto}`);
  })

}

module.exports = {
  crearProducto,
  obtenerProducto,
  modificarProducto,
  eliminarProducto
}