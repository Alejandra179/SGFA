const { model, Schema } = require("mongoose");

const ProductoSchema = new Schema({
  descripcion: String,
  unidad_medida: String,
  porcion: Number
});

module.exports = model("producto", ProductoSchema);
