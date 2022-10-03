const express = require("express");
const router = express.Router();
const { check } = require("express-validator")
const {
  getComedor,
  getComedores,
  addComedor,
  updateComedor,
  deleteComedor,
} = require("../controllers/comedores.controller");


router.get("/getComedores",getComedores);
router.get("/getComedor/:id_comedor", getComedor);
router.post("/addComedor", 
[
  check("name","nombre es requerido").not().isEmpty(),
  check("street","la calle es requerida").not().isEmpty(),
  check("neighborhood","el barrio es requerido").not().isEmpty(),
  check("responsable","el nombre del responsable es requerido").not().isEmpty()
],addComedor);
router.put("/updateComedor/:id_comedor", 
[
  check("id_comedor","id es requerido").not().isEmpty()
],updateComedor);
router.delete("/deleteComedor/:id_comedor", 
[
  check("id_comedor","id es requerido").not().isEmpty()
],deleteComedor);

module.exports = router;
