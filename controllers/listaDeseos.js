const mongoose = require('mongoose')
const ListaDeseos = mongoose.model('ListaDeseos')

function crearListaDeseos(req, res, next) {
  var listaDeseos = new ListaDeseos(req.body)
  listaDeseos.save().then(listaDeseos => {
    res.status(201).send(listaDeseos)
  }).catch(next)
}

function obtenerListaDeseos(req, res, next) {
  if(req.params.id){
    listaDeseos.findById(req.params.id)
			.then(listaDeseos => {
	      res.send(listaDeseos)
	    }).catch(next)
  } else {
    listaDeseos.find().then(listaDeseos=>{
      res.send(listaDeseos)
    }).catch(next)
  }
}

function modificarListaDeseos(req, res, next) {
  console.log("Lista de Desesos a modificar: " + req.params.id ) //req.param.id - Tienda en uri

  ListaDeseos.findById(req.params.id).then(listaDeseos => { //Busca la tienda que se recibe como parámetro.

    if (!listaDeseos) { return res.sendStatus(401); }   //Si no se encuentra tienda, retorna estaus 401.---

    if (typeof nuevaInfo.id_listaDeseos !== 'undefined')
      listaDeseos.imagen = nuevaInfo.id_listaDeseos
      listaDeseos.save().then(updatedlistaDeseos => {
      res.status(201).json(updatedlistaDeseos.publicData())
    }).catch(next)
  })
}

function eliminarListaDeseos(req, res) {
  // únicamente borra a su propio tienda obteniendo el id del token
  ListaDeseos.findById(req.params.id).then(listaDeseos => {

    if (!listaDeseos) { return res.sendStatus(401); }
      listaDeseos.deleteOne();
      res.status(200).send(`Lista Deseos ${req.params.id} eliminada. ${nombreListaDeseos}`);
  })

}

module.exports = {
  crearListaDeseos,
  obtenerListaDeseos,
  modificarListaDeseos,
  eliminarListaDeseos
}