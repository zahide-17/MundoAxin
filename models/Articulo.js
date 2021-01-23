  const mongoose = require("mongoose");

  const ArticuloSchema = new mongoose.Schema({
    nombre: {type: String, required: true}, // nombre de la mascota (o titulo del anuncio)
    imagen: [String], // links a las fotografías
    precio: {type: String, required:true },
    marca: {type: String, required:true},
    descripcion: {type:String, required: true}, // descripción del anuncio
    id_tienda: { type: mongoose.Schema.Types.ObjectId, ref: 'Tienda'}, // contacto con la persona que anuncia al animalito
    id_categoria: { type: mongoose.Schema.Types.ObjectId, ref: 'Categoria'}, // muy importante

}, { timestamps: true })

  ArticuloSchema.methods.publicData = function(){
    return {
      id: this.id,
      nombre: this.nombre,
      imagen: this.imagen,
      precio: this.precio,
      marca: this.marca,
      descripcion: this.descripcion,
      id_tienda: this.id_tienda,
      id_categoria: this.id_categoria,
    };
  };

  mongoose.model('Articulo', ArticuloSchema)