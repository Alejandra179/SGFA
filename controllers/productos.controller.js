const ProductoCtrl = {};
const Producto = require("../models/Producto")
ProductoCtrl.getProductos = async (req, res) => {
  try {
    const productos = await Producto.find();
    return res.json(productos);
  } catch (error) {
    return res.json(error.message);
  }
};

ProductoCtrl.getProducto = async (req, res) => {
  try {
    const prod = await Producto.findById(req.params.id_producto);

    if (!prod)
      return res.status(400).json({ msg: "error - producto no encontrado - " });

    return res.json(prod);
  } catch (error) {
    console.log(error.message);
    return res.json(error.message);
  }
};
ProductoCtrl.addProducto = async (req, res) => {
  const { descripcion, unidad_medida } = await req.body;

  try {
    const newProducto = { descripcion, unidad_medida };
    const prod = new Producto(newProducto);
    await prod.save();
    console.log("creada con exito");
    return res.json(prod);
  } catch (err) {
    return res.json(err.message);
  }
};

ProductoCtrl.updateProducto = async (req, res) => {
  const { descripcion, unidad_medida } = req.body;
  const prod = {
    descripcion,
    unidad_medida,
  };
  try {
    const producto = await Producto.findByIdAndUpdate(
      req.params.id_producto,
      prod
    );
    return res.json(producto);
  } catch (err) {
    console.error(err.message);
    return res.json(err.message);
  }
};

ProductoCtrl.deleteProducto = async (req, res) => {
  try {
    await Producto.findByIdAndDelete(req.params.id_producto);
    return res.json({ msg: "User Deleted" });
  } catch (error) {
    console.log(error);
    return res.json(error.message);
  }
};


module.exports = ProductoCtrl;
