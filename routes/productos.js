const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const {
  getProductos,
  getProducto,
  addProducto,
  updateProducto,
  deleteProducto,
} = require("../controllers/productos.controller");
const validationFields = require("../helpers/validationFields");
const esAdmin = require("../middlewares/es-admin");
const validar_jwt = require("../middlewares/validar_jwt");
router.get("/productosList", getProductos);
router.get("/productisList/:id_producto", getProducto);
 router.post("/addProducto",
  [
    validar_jwt,
    esAdmin,[

      check("name", "el producto debe tener un nombre").not().isEmpty(),
      check("unidad_medida", "todos los campos son obligatorios").not().isEmpty(),
      validationFields
    ]
  ],
  addProducto
); 
router.put("/update/:id_producto", [validar_jwt, esAdmin], updateProducto);
router.delete("/eliminar/:id_producto", [validar_jwt, esAdmin], deleteProducto); 

module.exports = router;
