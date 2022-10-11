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
const validationFields = require("../helpers/validationFields");
const { validar_jwt } = require("../middlewares/validar_jwt");


router.get("/getListas",validar_jwt, getListas);
router.get("/getLista/:id_lista", validar_jwt,getLista);
router.post("/addLista",validar_jwt,
[
  check("comedor","el registro de la lista debe estar vinculado con un comedor").not().isEmpty(),
  check("semana","este campo no puede ser vacio").not().isEmpty(),
  validationFields
], addLista);
router.put("/update/:id_lista",validar_jwt, updateLista);
router.delete("/delete/:id_lista",validar_jwt, deleteLista);


module.exports = router;
