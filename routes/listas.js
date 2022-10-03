const express = require("express");
const router = express.Router();
const { check } = require("express-validator")
const {
  getListas,
  getLista,
  addLista,
  deleteLista,
  updateLista,
} = require("../controllers/listas.controller");


router.get("/getListas", getListas);
router.get("/getLista/:id_lista", getLista);
router.post("/addLista",
[
  check("comedor","el registro de la lista debe estar vinculado con un comedor").not().isEmpty(),
  check("semana","este campo no puede ser vacio").not().isEmpty(),
], addLista);
router.put("/update/:id_lista", updateLista);
router.delete("/delete/:id_lista", deleteLista);


module.exports = router;
