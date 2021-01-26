const mongoose = require("mongoose");

const ListaDeseosSchema = new mongoose.Schema({

  id_producto:{ type: mongoose.Schema.Types.ObjectId, ref: 'Producto'}, // nombre de la mascota (o titulo del anuncio)
  id_usuario:{ type: mongoose.Schema.Types.ObjectId, ref: 'Usuario'}

  }, { timestamps: true })

ListaDeseosSchema.methods.publicData = function(){
  return {
    id: this.id,
    id_producto: this.id_producto,
    id_usuario: this.id_usuario,
    createdAt: this.createdAt,
    updatedAt: this.updatedAt
  };
};

mongoose.model('ListaDeseos', ListaDeseosSchema)