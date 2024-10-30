import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    nombre: {
      type: String,
      required: true,
    },
    categoria: {
      type: String,
      required: true,
    },
    marca: {
      type: String,
      required: true,
    },
    precio: {
      type: String,
      required: true,
    },
    stock: {
      type: String,
      required: true,
    },
    descripcion: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    }
  }, {
    timestamps: true,
    versionKey: false
  })

export default mongoose.model('Products', productSchema);
