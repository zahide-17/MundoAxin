
const mongoose = require('mongoose')
const Categoria = mongoose.model('Categoria')

function crearCategoria(req, res, next) {
  var categoria = new Categoria(req.body)
  categoria.save().then(categoria => {
    res.status(201).send(categoria)
  }).catch(next)
}

function obtenerCategoria(req, res, next) {
  if(req.params.id){
    Categoria.findById(req.params.id)
			.then(categoria => {
	      res.send(categoria)
	    }).catch(next)
  } else {
    Categoria.find().then(categoria=>{
      res.send(categoria)
    }).catch(next)
  }
}

function modificarCategoria(req, res, next) {
  console.log("Categoria a modificar: " + req.params.id ) //req.param.id - Tienda en uri

  Categoria.findById(req.params.id).then(categoria => { //Busca la tienda que se recibe como parámetro.

    if (!categoria) { return res.sendStatus(401); }   //Si no se encuentra tienda, retorna estaus 401.---

      if (typeof nuevaInfo.nombre !== 'undefined')
        categoria.nombre = nuevaInfo.nombre
      categoria.save().then(updatedCategoria => {
        res.status(201).json(updatedCategoria.publicData())
      }).catch(next)
    })
}

/*function eliminarTienda(req, res) {
    // Líneas que buscan un usaurio en la bd, una vez que lo encuenra lo elimina.
  res.status(200).send(`Tienda ${req.params.id} eliminado`);
}*/

function eliminarCategoria(req, res) {
  // únicamente borra a su propio tienda obteniendo el id del token
  Categoria.findById(req.params.id).then(categoria => {

    if (!categoria) { return res.sendStatus(401); }
      categoria.deleteOne();
      res.status(200).send(`Categoria ${req.params.id} eliminada. ${nombreCategoria}`);
  });

  /*Tienda.findOneAndDelete({ _id: req.param.id }).then(r => {
      res.status(200).send(`Tienda ${req.params.id} eliminada: ${r}`);
  });*/
}

module.exports = {
  crearCategoria,
  obtenerCategoria,
  modificarCategoria,
  eliminarCategoria
}