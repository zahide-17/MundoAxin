const mongoose = require('mongoose')
const Sucursal = mongoose.model('Sucursal')

function crearSucursal(req, res, next) {
  var sucursal = new Sucursal(req.body)
  sucursal.save().then(sucursal => {
    res.status(201).send(sucursal)
  }).catch(next)
}

/*function obtenerTiendas(req, res) {
  // Simulando dos Tiendas y respondiendolos
  var tienda1 = new Tienda(1, 'Nochipa', 'Perro', 'https://www.perrosrazapequeña.com/wp-content/uploads/2018/06/chihuahua-pelo-largo.jpg','bien bonita','1','CDMX');
  var tienda2 = new Tienda(1, 'Tito', 'Tortuga', 'https://img.culturacolectiva.com/featured/2019/02/27/1551305058738/tortugas-japonesas-se-vuelven-plaga-en-mexico-high.png','verde','1','CDMX');
  res.send([tienda1, tienda2])
}*/

function obtenerSucursal(req, res, next) {
  if(req.params.id){
    Sucursal.findById(req.params.id)
			.then(sucursal => {
	      res.send(sucursal)
	    }).catch(next)
  } else {
    Sucursal.find().then(sucursal=>{
      res.send(sucursal)
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

function modificarSucursal(req, res, next) {
  console.log("Sucursal a modificar: " + req.params.id ) //req.param.id - Tienda en uri

  Sucursal.findById(req.params.id).then(sucursal => { //Busca la tienda que se recibe como parámetro.

    if (!sucursal) { return res.sendStatus(401); }   //Si no se encuentra tienda, retorna estaus 401.---

      if (typeof nuevaInfo.nombre !== 'undefined')
        sucursal.nombre = nuevaInfo.nombre
      if (typeof nuevaInfo.razonsocial !== 'undefined')
        sucursal.razonsocial = nuevaInfo.razonsocial
      sucursal.save().then(updatedSucursal => {
        res.status(201).json(updatedSucursal.publicData())
      }).catch(next)
    })
}

function eliminarSucursal(req, res) {
  // únicamente borra a su propio tienda obteniendo el id del token
  Sucursal.findById(req.params.id).then(sucursal => {

    if (!sucursal) { return res.sendStatus(401); }
      sucursal.deleteOne();
      res.status(200).send(`Sucursal ${req.params.id} eliminada. ${nombreSucursal}`);
  });

  /*Tienda.findOneAndDelete({ _id: req.param.id }).then(r => {
      res.status(200).send(`Tienda ${req.params.id} eliminada: ${r}`);
  });*/
}


module.exports = {
  crearSucursal,
  obtenerSucursal,
  modificarSucursal,
  eliminarSucursal
}