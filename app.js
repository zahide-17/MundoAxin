var express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors');

// Objeto global de la app
var app = express();

// configuración de middlewares
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/*********************** Mongoose Configuration *******************************/
const mongoose = require("mongoose");

// mongoose.connect(
//   "mongodb+srv://zadd:91MwDidJNYYPiNkN@cluster0.olrfq.mongodb.net/MundoAxinDEV?retryWrites=true&w=majority"
// );

var isProduction = process.env.NODE_ENV === 'production';

console.log(process.env.MONGODB_URI, " ", process.env.NODE_ENV);

mongoose.connect(
  process.env.MONGODB_URI, // obtiene la url de conexión desde las variables de entorno
  { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }
);

//mongoose.set("debug", true);
//mongodb+srv://zadd:91MwDidJNYYPiNkN@cluster0.olrfq.mongodb.net/mundoAxinDEV?retryWrites=true&w=majority

const errorhandler = require('errorhandler')
    if (!isProduction) {
      mongoose.set('debug', true)
      app.use(errorhandler())
      // imprimirá los errores en development
      app.use(function (err, req, res, next) {
        console.log(err.stack);
        res.status(err.status || 500);
        res.json({
          'errors': {
            message: err.message,
            error: err
          }
        })
      })
    }
require("./models/Usuario");
require('./config/passport');
require('./models/Mascota');
require('./models/Solicitud');
require('./models/Tienda');
require('./models/Sucursal');
require('./models/Categoria');
require('./models/Articulo');


// Aquí se importarán los modelos Mascota y Solicitud cuando estén listos
/*********************** Mongoose Configuration *******************************/

// Agregamos el código de nuestro router (routes/index.js)
app.use('/v1', require('./routes'));

// Manejando los errores 404
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Iniciando el servidor...
var server = app.listen(process.env.PORT || 3000, function(){
  console.log('Escuchando en el puerto ' + server.address().port);
});