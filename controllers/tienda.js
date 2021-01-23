
const mongoose = require('mongoose')
const Tienda = mongoose.model('Tienda')

function crearTienda(req, res, next) {
  var tienda = new Tienda(req.body)
  tienda.save().then(tienda => {
    res.status(201).send(tienda)
  }).catch(next)
}

/*function obtenerTiendas(req, res) {
  // Simulando dos Tiendas y respondiendolos
  var tienda1 = new Tienda(1, 'Nochipa', 'Perro', 'https://www.perrosrazapequeña.com/wp-content/uploads/2018/06/chihuahua-pelo-largo.jpg','bien bonita','1','CDMX');
  var tienda2 = new Tienda(1, 'Tito', 'Tortuga', 'https://img.culturacolectiva.com/featured/2019/02/27/1551305058738/tortugas-japonesas-se-vuelven-plaga-en-mexico-high.png','verde','1','CDMX');
  res.send([tienda1, tienda2])
}*/ 

function obtenerTiendas(req, res, next) {
  if(req.params.id){
    Tienda.findById(req.params.id)
			.then(tiendas => {
	      res.send(tiendas)
	    }).catch(next)
  } else {
    Tienda.find().then(tiendas=>{
      res.send(tiendas)
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

function modificarTienda(req, res, next) {
  console.log("Tienda a modificar: " + req.params.id ) //req.param.id - Tienda en uri

  Tienda.findById(req.params.id).then(tienda => { //Busca la tienda que se recibe como parámetro.

    if (!tienda) { return res.sendStatus(401); }   //Si no se encuentra tienda, retorna estaus 401.---

      if (typeof nuevaInfo.nombre !== 'undefined')
        tienda.nombre = nuevaInfo.nombre
      if (typeof nuevaInfo.ubicacion !== 'undefined')
        tienda.ubicacion = nuevaInfo.ubicacion
      tienda.save().then(updatedTienda => {
        res.status(201).json(updatedTienda.publicData())
      }).catch(next)
    })
}

/*function eliminarTienda(req, res) {
    // Líneas que buscan un usaurio en la bd, una vez que lo encuenra lo elimina.
  res.status(200).send(`Tienda ${req.params.id} eliminado`);
}*/

function eliminarTienda(req, res) {
  // únicamente borra a su propio tienda obteniendo el id del token
  Tienda.findById(req.params.id).then(tienda => {

    if (!tienda) { return res.sendStatus(401); }
      tienda.deleteOne();
      res.status(200).send(`Tienda ${req.params.id} eliminada. ${nombreTienda}`);
  });
  
  /*Tienda.findOneAndDelete({ _id: req.param.id }).then(r => {
      res.status(200).send(`Tienda ${req.params.id} eliminada: ${r}`);
  });*/
}


module.exports = {
  crearTienda,
  obtenerTiendas,
  modificarTienda,
  eliminarTienda
}