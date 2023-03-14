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
    check("name", "el nombre es requerido-").not().isEmpty().isString(),
    check("username", "el nombre de usuario es requerido").not().isEmpty().isString(),
    check("password", "la contraseña debe contener 6 caracteres como mínimo").isLength({ min: 6 }).not().isEmpty().isString().withMessage("debe ingresar una contraseña"),
      validationFields
  ], 
  register
);

module.exports = router;
