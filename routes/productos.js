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
const { validar_jwt } = require("../middlewares/validar_jwt");
router.get("/productosList",validar_jwt, getProductos);
router.get("/productisList/:id_producto", getProducto);
router.post(
  "/addProducto",validar_jwt,
  [
    check("name", "el producto debe tener un nombre").not().isEmpty(),
    check("unidad_medida", "todos los campos son obligatorios").not().isEmpty(),
    validationFields
  ],
  addProducto
);
router.put("/update/:id_producto",validar_jwt, updateProducto);
router.delete("/eliminar/:id_producto", validar_jwt,deleteProducto);

module.exports = router;
