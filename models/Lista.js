const { model, Schema } = require("mongoose");

const ListaSchema = new Schema(
  {
    comedor: String,
    dia: String,
    mercaderias: [
      {
        cantidad: Number,
        descripcion: String,
        unidad_medida: String,
      },
    ],
    estado: {
      type: String,
      enum: ["cargado", "pendiente", "entregado"],
    },
    fecha:{
      type: Date,
      default:new Date()
    }
  },
  {
    timestamps: true,
  }
);

module.exports = model("lista", ListaSchema);
