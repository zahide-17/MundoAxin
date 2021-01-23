const mongoose = require('mongoose')
const Producto = mongoose.model('Producto')

function crearProducto(req, res, next) {
  var producto = new Producto(req.body)
  producto.save().then(producto => {
    res.status(201).send(producto)
  }).catch(next)
}

/*function obtenerTiendas(req, res) {
  // Simulando dos Tiendas y respondiendolos
  var tienda1 = new Tienda(1, 'Nochipa', 'Perro', 'https://www.perrosrazapequeña.com/wp-content/uploads/2018/06/chihuahua-pelo-largo.jpg','bien bonita','1','CDMX');
  var tienda2 = new Tienda(1, 'Tito', 'Tortuga', 'https://img.culturacolectiva.com/featured/2019/02/27/1551305058738/tortugas-japonesas-se-vuelven-plaga-en-mexico-high.png','verde','1','CDMX');
  res.send([tienda1, tienda2])
}*/

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

// function obtenerTienda(req, res) {
//   // Simulando dos Tiendas y respondiendolos
//   var tienda1 = new Tienda(1, 'Nochipa', 'Perro', 'https://www.perrosrazapequeña.com/wp-content/uploads/2018/06/chihuahua-pelo-largo.jpg','bien bonita','1','CDMX');
//   res.send(tienda1)
// }

/*function modificarTienda(req, res) {
  // simulando un tienda previamente existente que el tienda utili
  var tienda1 = new Tienda(req.params.id, 'Nochipa', 'Perro', 'https://www.perrosrazapequeña.com/wp-content/uploads/2018/06/chihuahua-pelo-largo.jpg','bien bonita','1','CDMX');
  var modificaciones = req.body
  tienda1 = { ...tienda1, ...modificaciones }
  res.send(tienda1)
}*/

function modificarProducto(req, res, next) {
  console.log("Articulo a modificar: " + req.params.id ) //req.param.id - Tienda en uri

  Producto.findById(req.params.id).then(producto => { //Busca la tienda que se recibe como parámetro.

    if (!producto) { return res.sendStatus(401); }   //Si no se encuentra tienda, retorna estaus 401.---

      if (typeof nuevaInfo.imagen !== 'undefined')
        producto.imagen = nuevaInfo.imagen
      if (typeof nuevaInfo.imagen !== 'undefined')
        producto.imagen = nuevaInfo.imagen
      if (typeof nuevaInfo.precio !== 'undefined')
        producto.precio = nuevaInfo.precio
      producto.save().then(updatedArticulo => {
        res.status(201).json(updatedArticulo.publicData())
      }).catch(next)
    })
}

function eliminarArticulo(req, res) {
  // únicamente borra a su propio tienda obteniendo el id del token
  Producto.findById(req.params.id).then(articulo => {

    if (!articulo) { return res.sendStatus(401); }
      articulo.deleteOne();
      res.status(200).send(`Articulo ${req.params.id} eliminada. ${nombreArticulo}`);
  });

  /*Tienda.findOneAndDelete({ _id: req.param.id }).then(r => {
      res.status(200).send(`Tienda ${req.params.id} eliminada: ${r}`);
  });*/
}


module.exports = {
  crearArticulo,
  obtenerArticulo,
  modificarArticulo: modificarProducto,
  eliminarArticulo
}