const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const {
  getComedor,
  getComedores,
  addComedor,
  updateComedor,
  deleteComedor,
} = require("../controllers/comedores.controller");
const validationFields = require("../helpers/validationFields");
const esAdmin = require("../middlewares/es-admin");
const validar_jwt = require("../middlewares/validar_jwt");

router.get("/getComedores", validar_jwt, getComedores);
router.get("/getComedor/:id_comedor", validar_jwt, getComedor);
router.post(
  "/addComedor",
  [
    validar_jwt,
    esAdmin,
    check("name", "nombre es requerido")
      .not()
      .isEmpty()
      .isString()
      .withMessage("nombre invalido"),
    check("street", "la calle es requerida").not().isEmpty(),
    check("neighborhood", "el barrio es requerido")
      .not()
      .isEmpty()
      .withMessage("debe ser string"),
    check("responsable", "el nombre del responsable es requerido")
      .not()
      .isEmpty()
      .isString()
      .withMessage("debe ser un string"),
    validationFields,
  ],
  addComedor
); 
router.put("/updateComedor/:id_comedor", validar_jwt, updateComedor);
router.delete("/deleteComedor/:id_comedor", validar_jwt, deleteComedor);

module.exports = router;
