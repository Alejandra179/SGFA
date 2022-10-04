const ProductoCtrl = {};
const Producto = require("../models/Producto");
ProductoCtrl.getProductos = async (req, res) => {
  try {
    const productos = await Producto.find();
    return res.json(productos);
  } catch (error) {
    return res.json(error.message);
  }
};

ProductoCtrl.getProducto = async (req, res) => {
  const id = req.params.id_producto;
  try {
    const prod = await Producto.findOne({ _id: id });
    !prod
      ? res.status(400).json({ msg: "error - producto no encontrado - " })
      : res.json(prod);
  } catch (error) {
    return res.json(error.message);
  }
};
ProductoCtrl.addProducto = async (req, res) => {
  const { descripcion, unidad_medida } = await req.body;

  try {
    const newProducto = { descripcion, unidad_medida };
    const prod = new Producto(newProducto);
    await prod.save();
    return res.json(prod);
  } catch (err) {
    return res.json(err.message);
  }
};

ProductoCtrl.updateProducto = async (req, res) => {
  const id = req.params.id_producto;
  const { descripcion, unidad_medida } = req.body;
  const prod = {
    descripcion,
    unidad_medida,
  };
  try {
    const producto = await Producto.findByIdAndUpdate(id, prod);
    return res.json(producto);
  } catch (err) {
    return res.json(err.message);
  }
};

ProductoCtrl.deleteProducto = async (req, res) => {
  const id = req.params.id_producto;
  try {
    await Producto.findByIdAndDelete(id);
    return res.json({ msg: "User Deleted" });
  } catch (error) {
    return res.json(error.message);
  }
};

module.exports = ProductoCtrl;
