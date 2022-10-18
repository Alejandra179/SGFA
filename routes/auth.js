const express = require("express");
const { login, register } = require("../controllers/auth.controller");
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
    check("password", "-el password debe ser de un minimo de 6 caracteres-")
      .isLength({ min: 6 })
      .not()
      .isEmpty()
      .isString()
      .withMessage("password invalid"),
  ],
  validationFieldsregister
);

module.exports = router;
