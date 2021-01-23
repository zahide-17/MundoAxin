   const mongoose = require('mongoose');                         //Importando mongoose.

   const CategoriaSchema = new mongoose.Schema({                   //Definiendo el objeto TiendaSchema con el constructor Schema                                          

    nombre: { type: String, enum:['labial','sombras','delineador']},
  },
  { timestamps: true }
);

/**
* Devuelve la representación de un tienda, sólo datos públicos
*/
CategoriaSchema.methods.publicData = function(){
  return {
    id: this.id,
    nombre: this.nombre,
    createdAt: this.createdAt,
    updatedAt: this.updatedAt
  };
};

mongoose.model("Categoria", CategoriaSchema);    //Define el modelo Tienda, utilizando el esquema TiendaSchema.