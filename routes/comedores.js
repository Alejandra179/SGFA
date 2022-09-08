const express = require("express");
const router = express.Router();
const Comedor = require("../models/Comedor");
const { check, validationResult } = require("express-validator");

router.get("/getComedores", async (req, res) => {
  try {
    const comedores = await Comedor.find();
    return res.json(comedores);
  } catch (error) {
    console.log(error.message);
    return res.json(error.message);
  }
});

router.post("/addComedores", async (req, res) => {
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
});

//@route GET api/profile/
//desc: get all profiles
//@public

router.get("/comedores/:id_comedor", async (req, res) => {
  try {
    const comedor = await Comedor.findById(req.params.id_comedor);

    if (!comedor)
      return res.status(400).json({ msg: "error - comedor no encontrado - " });

    return res.json(comedor);
  } catch (error) {
    console.log(error.message);
    return res.json(error.message);
  }
});

router.delete("/deleteComedor/:id_comedor", async (req, res) => {
  try {
    await Comedor.findByIdAndDelete(req.params.id_comedor);
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
router.put("/updateComedores/:id_comedor", async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, street, neighborhood, number, responsable } = req.body;
  const come = {
    name,
    street,
    neighborhood,
    number,
    responsable,
  };

  try {
    const comedor = await Comedor.findByIdAndUpdate(
      req.params.id_comedor,
      come
    );
    return res.json(comedor);
  } catch (err) {
    console.error(err.message);
    return res.json(err.message);
  }
});


router.delete("/comedores/:id_comedor", async (req, res) => {
  try {
    await Comedor.findByIdAndDelete(req.params.id_comedor);
    return res.json("comedor eliminado correctamente");
  } catch (err) {
    console.error(err.message);
    return res.json(err.message);
  }
});

module.exports = router;
