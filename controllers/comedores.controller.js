const comedoresCtrl = {};
const Comedor = require("../models/Comedor");

comedoresCtrl.getComedores = async (req, res) => {
  try {
    const comedores = await Comedor.find();
    return res.json(comedores);
  } catch (error) {
    return res.json(error.message);
  }
};

comedoresCtrl.getComedor = async (req, res) => {
  const id = req.params.id_comedor;
  try {
    const comedor = (await Comedor.findOne({ _id: id })
    (!comedor))? res.status(400).json({ msg: "error - comedor no encontrado - " })
      : res.json(comedor);
  } catch (error) {
    console.log(error.message);
    return res.json({ message: "no se encuentra el documento" });
  }
};

comedoresCtrl.addComedor = async (req, res) => {
  
  const { name, street, neighborhood, number, responsable } = req.body;

  try {
    const newComedor = { name, street, neighborhood, number, responsable };
    const come = new Comedor(newComedor);
    await come.save();
    return res.json(come);
  } catch (err) {
    return res.json(err.message);
  }
};

comedoresCtrl.updateComedor = async (req, res) => {
  const id = req.params.id_comedor;
  const { name, street, neighborhood, number, responsable } = req.body;
  const come = {
    name,
    street,
    neighborhood,
    number,
    responsable,
  };

  try {
    const comedor = await Comedor.findByIdAndUpdate(id, come);
    return res.json(comedor);
  } catch (err) {
    return res.status(400).json({ msg: "error - comedor no encontrado - " });
  }
};

comedoresCtrl.deleteComedor = async (req, res) => {
  const id = req.params.id_comedor;
  try {
    await Comedor.findByIdAndDelete(id);
    return res.json("comedor eliminado correctamente");
  } catch (err) {
    return res.json(err.message);
  }
};
module.exports = comedoresCtrl;
