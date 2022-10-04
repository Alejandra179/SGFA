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
router.get("/productosList", getProductos);
router.get("/productisList/:id_producto", getProducto);
router.post(
  "/addProducto",
  [
    check("name", "el producto debe tener un nombre").not().isEmpty(),
    check("unidad_medida", "todos los campos son obligatorios").not().isEmpty(),
  ],
  addProducto
);
router.put("/productos/update/:id_producto", updateProducto);
router.delete("/productos/eliminar/:id_producto", deleteProducto);

module.exports = router;
