const comedoresCtrl = {};
const Comedor = require("../models/Comedor");
const { check, validationResult } = require("express-validator");
comedoresCtrl.getComedores = async (req, res) => {
  try {
    const comedores = await Comedor.find();
    return res.json(comedores);
  } catch (error) {
    console.log(error.message);
    return res.json(error.message);
  }
};


comedoresCtrl.getComedor = async (req, res) => {
  const id = req.params.id_comedor
  try {
    const comedor = await Comedor.findOne({_id:id})
    console.log(comedor)
    if (!comedor){

      return res.status(400).json({ msg: "error - comedor no encontrado - " });
    }
    return res.json(comedor)
  } catch (error) {
    console.log(error.message);
    return res.json({message:"no se encuentra el documento"});
  }
};

comedoresCtrl.addComedor = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, street, neighborhood, number, responsable } = req.body;

  try {
    const newComedor = { name, street, neighborhood, number, responsable };
    const come = new Comedor(newComedor);
    await come.save();
    console.log("creado con exito");
    return res.json(come);
  } catch (err) {
    console.error(err.message);
    return res.json(err.message);
  }
};

comedoresCtrl.updateComedor = async (req, res) => {
  const errors = validationResult(req);
  const id = req.params.id_comedor
  const { name, street, neighborhood, number, responsable } = req.body;
  const come = {
    name,
    street,
    neighborhood,
    number,
    responsable,
  };

  try {
    const comedor = await Comedor.findByIdAndUpdate(id,come);
    return res.json(comedor);
  } catch (err) {
    return res.status(400).json({ msg: "error - comedor no encontrado - " });
  }
};

comedoresCtrl.deleteComedor = async (req, res) => {
  try {
    await Comedor.findByIdAndDelete(req.params.id_comedor);
    return res.json("comedor eliminado correctamente");
  } catch (err) {
    console.error(err.message);
    return res.json(err.message);
  }
};
module.exports = comedoresCtrl;
