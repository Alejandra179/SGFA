const express = require("express");
const router = express.Router();
const Producto = require("../models/Producto");
const {
  getProductos,
  getProducto,
  addProducto,
  updateProducto,
  deleteProducto,
} = require("../controllers/productos.controller");
router.get("/productosList", getProductos);
router.get("/productisList/:id_producto", getProducto);
router.post("/addProducto", addProducto);
router.put("/productos/update/:id_producto", updateProducto);
router.delete("/productos/eliminar/:id_producto", deleteProducto);

module.exports = router;
