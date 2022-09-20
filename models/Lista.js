const { model, Schema } = require("mongoose");

const ListaSchema = new Schema(
  {
    comedor: String,
    semana: [
      {
        dia: String,
        mercaderias: [
          {
            cantidad: Number,
            descripcion: String,
            unidad_medida: String,
          },
        ],
      },
    ],
    estado: {
      type: Array,
      enum:["cargado","pendiente","entregado"]
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("lista", ListaSchema);
