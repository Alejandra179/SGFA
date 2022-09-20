const express = require("express");
const router = express.Router();

const {
  getListas,
  getLista,
  addLista,
  deleteLista,
  updateLista,
} = require("../controllers/listas");


router.get("/getListas", getListas);
router.get("/getLista/:id_lista", getLista);
router.post("/addLista", addLista);
router.put("/update/:id_lista", updateLista);
router.delete("/delete/:id_lista", deleteLista);


module.exports = router;
