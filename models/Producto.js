const mongoose = require("mongoose");

const ProductoSchema = new mongoose.Schema({
  nombre: {type: String, required: true, unique:true}, // nombre de la mascota (o titulo del anuncio)
  imagen: [String], // links a las fotografías
  marca: {type: String, required:true},
  id_articulo: { type: mongoose.Schema.Types.ObjectId, ref: 'Articulo'}, // contacto con la persona que anuncia al animalito

}, { timestamps: true })

ProductoSchema.methods.publicData = function(){
  return {
    id: this.id,
    nombre: this.nombre,
    imagen: this.imagen,
    marca: this.marca,
    id_articulo: this.id_articulo,
  };
};

mongoose.model('Producto', ProductoSchema)