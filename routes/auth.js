const express = require("express");
const { login, register, authLogin } = require("../controllers/auth.controller");
const {check}= require("express-validator");
const validar_jwt = require("../middlewares/validar_jwt");
const validationFields = require("../helpers/validationFields");
const router = express.Router();
router.post("/login", login);

router.post(
  "/register",
  [
    check("name", "-el nombre es requerido-")
      .not()
      .isEmpty()
      .isString()
      .withMessage("nombre invalido"),
    check("userName", "-el nombre de usuario es requerido-")
    .not()
    .isEmpty()
    .isString()
    .withMessage("nombre de usuario invalido"),
    check("password", "-el password debe ser de un minimo de 6 caracteres-")
      .isLength({ min: 6 })
      .not()
      .isEmpty()
      .isString()
      .withMessage("password invalid"),
      validationFields
  ],
  register
);

module.exports = router;
