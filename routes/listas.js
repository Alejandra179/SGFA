const express = require("express");
const router = express.Router();
const Lista = require("../models/Lista");
const { check, validationResult } = require("express-validator");

router.get("/getListas", async (req, res) => {
  try {
    const listas = await Lista.find();
    return res.json(listas);
  } catch (error) {
    console.log(error.message);
    return res.json(error.message);
  }
});

router.post("/addLista", async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { comedor, semana } = await req.body;
  console.log(semana)

  try {
    const newLista = { comedor: comedor,
        semana: semana
      };
    const lista = new Lista(newLista);
    await lista.save();
    console.log("creada con exito");
    return res.json(lista);
  } catch (err) {
    console.error(err.message);
    return res.json(err.message);
  }
});


router.get("/getLista/:id_lista", async (req, res) => {
  try {
    const lista = await Lista.findById(req.params.id_lista);

    if (!lista)
      return res.status(400).json({ msg: "error - lista no encontrado - " });

    return res.json(lista);
  } catch (error) {
    console.log(error.message);
    return res.json(error.message);
  }
});

router.delete("/deleteLista/:id_lista", async (req, res) => {
  try {
    await Lista.findByIdAndDelete(req.params.id_lista);
    //   await Comedor.findByIdAndDelete({_id: req.user.id})

    return res.json({ msg: "User Deleted" });
  } catch (error) {
    console.log(error);
    return res.json(error.message);
  }
});

//@route PUT api/profile/experience
//desc: add profile experience
//@private
router.put("/updateLista/:id_lista", async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { comedor, semana } = req.body;
  const list = {
    comedor,
   semana
  };

  try {
    const lista = await Lista.findByIdAndUpdate(
      req.params.id_comedor,
      list
    );
    return res.json(lista);
  } catch (err) {
    console.error(err.message);
    return res.json(err.message);
  }
});




module.exports = router;
