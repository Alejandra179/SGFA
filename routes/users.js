const express = require("express");
const router = express.Router();

const { putUser, deleteUser } = require("../controllers/user.controller");
const esAdmin = require("../middlewares/es-admin");
const validar_jwt = require("../middlewares/validar_jwt");

router.put("/update", [validar_jwt, esAdmin], putUser);
router.delete("/delete", [validar_jwt, esAdmin], deleteUser);

module.exports = router;
