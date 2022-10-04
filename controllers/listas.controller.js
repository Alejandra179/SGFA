const ListaCtrl = {};
const Lista = require("../models/Lista");
const { validationResult } = require("express-validator");
ListaCtrl.getListas = async (req, res) => {
  try {
    const listas = await Lista.find();
    return res.json(listas);
  } catch (error) {
    return res.json(error.message);
  }
};

ListaCtrl.getLista = async (req, res) => {
  const id = req.params.id_lista;
  try {
    const lista = await Lista.findOne({ _id: id });
    if (!lista) {
      return res.status(400).json({ msg: "error - lista no encontrado - " });
    }
    return res.json(lista);
  } catch (error) {
    return res.json(error.message);
  }
};

ListaCtrl.addLista = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { comedor, semana } = await req.body;

  try {
    const newLista = { comedor: comedor, semana: semana };
    const lista = new Lista(newLista);
    await lista.save();
    return res.json(lista);
  } catch (err) {
    return res.json(err.message);
  }
};

ListaCtrl.deleteLista = async (req, res) => {
  try {
    await Lista.findByIdAndDelete(req.params.id_lista);
    return res.json({ msg: "User Deleted" });
  } catch (error) {
    console.log(error);
    return res.json(error.message);
  }
};

ListaCtrl.updateLista = async (req, res) => {
  const errors = validationResult(req);
  const id = req.params.id_lista;
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { comedor, semana } = req.body;
  const list = {
    comedor,
    semana,
  };

  try {
    const lista = await Lista.findByIdAndUpdate(id, list);
    return res.json(lista);
  } catch (err) {
    return res.json(err.message);
  }
};
module.exports = ListaCtrl;
