
   // Tienda.js
   const mongoose = require('mongoose');                         //Importando mongoose.

   const TiendaSchema = new mongoose.Schema({                   //Definiendo el objeto TiendaSchema con el constructor Schema                                          
    nombre: { type: String, required: true },
    ubicacion: { type: String, required: true }
  },
  { timestamps: true }
);

/**
* Devuelve la representación de un tienda, sólo datos públicos
*/
TiendaSchema.methods.publicData = function(){
  return {
    id: this.id,
    ubicacion: this.ubicacion,
    nombre: this.nombre,
    createdAt: this.createdAt,
    updatedAt: this.updatedAt
  };
};

mongoose.model("Tienda", TiendaSchema);    //Define el modelo Tienda, utilizando el esquema TiendaSchema.