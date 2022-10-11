const ListaCtrl = {};
const Lista = require("../models/Lista");
ListaCtrl.getListas = async (req, res) => {
  try {
    const listas = await Lista.find();
    return res.json(listas);
  } catch (error) {
    return res.status(400).json(error.message);
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
    return res.status(400).json(error.message);
  }
};

ListaCtrl.addLista = async (req, res) => {

  try {
  
    const { comedor, semana } = await req.body;

    const newLista = { comedor, semana };
    const lista = new Lista(newLista);
    await lista.save();
    return res.status(200).json({message:"list successfully added"});
  } catch (err) {
    return res.status(400).json(err.message);
  }
};

ListaCtrl.deleteLista = async (req, res) => {
  try {
    await Lista.findByIdAndDelete(req.params.id_lista);
    return res.json({ message: "List Deleted" });
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

ListaCtrl.updateLista = async (req, res) => {

  
  try {
    const { comedor, semana } = req.body;
    const list = {
      comedor,
      semana,
    };
    const lista = await Lista.findByIdAndUpdate(id, list);
    return res.status(200).json({message:"list updated"});
  } catch (err) {
    return res.status(400).json(err.message);
  }
};
module.exports = ListaCtrl;
