const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const {
  getListas,
  getLista,
  addLista,
  deleteLista,
  updateLista,
} = require("../controllers/listas.controller");
const validationFields = require("../helpers/validationFields");
const esAdmin = require("../middlewares/es-admin");
const validar_jwt = require("../middlewares/validar_jwt");

//router.get("/getListas", validar_jwt, getListas);
router.get("/getLista/:id_lista", validar_jwt, getLista);
router.post(
  "/addLista",
  [
    validar_jwt,
    esAdmin,
    check(
      "comedor",
      "el registro de la lista debe estar vinculado con un comedor"
    )
      .not()
      .isEmpty()
      .isString()
      .withMessage("formato de dia invalido"),
    check("dia", "este campo no puede ser vacio")
      .not()
      .isEmpty()
      .isString()
      .withMessage("formato de dia invalido"),
    check("mercaderias", "este campo no puede ser vacio")
      .not()
      .isEmpty()
      .isArray()
      .withMessage("se espera un arreglo"),
    validationFields,
  ],
  addLista
);
router.put("/update/:id_lista", [validar_jwt, esAdmin], updateLista);
router.delete("/delete/:id_lista", [validar_jwt, esAdmin], deleteLista);

module.exports = router;
