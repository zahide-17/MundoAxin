   const mongoose = require('mongoose');                         //Importando mongoose.

   const SucursalSchema = new mongoose.Schema({                   //Definiendo el objeto TiendaSchema con el constructor Schema                                          
    nombre: { type: String, required: true },
    email:  { type: String, required: true , unique:true},
    razonSocial: {type:String, requires: true}
  },
  { timestamps: true }
);

/**
* Devuelve la representación de un tienda, sólo datos públicos
*/
SucursalSchema.methods.publicData = function(){
  return {
    id: this.id,
    nombre: this.nombre,
    email: this.email,
    razonSocial: this.razonSocial,
    createdAt: this.createdAt,
    updatedAt: this.updatedAt
  };
};

mongoose.model("Sucursal", SucursalSchema);    //Define el modelo Tienda, utilizando el esquema TiendaSchema.