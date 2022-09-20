const {model, Schema} = require("mongoose")

const ProductoSchema = new Schema({
    descripcion: String,
    unidad_mdedida: String
})

module.exports= model("Producto",ProductoSchema);