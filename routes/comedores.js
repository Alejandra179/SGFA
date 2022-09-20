const express = require("express");
const router = express.Router();
const {
  getComedor,
  getComedores,
  addComedor,
  updateComedor,
  deleteComedor,
} = require("../controllers/comedores");

router.get("/getComedores", getComedores);
router.get("/getComedor/:id_comedor", getComedor);
router.post("/addComedor", addComedor);
router.put("/updateComedor/:id_comedor", updateComedor);
router.delete("/deleteComedor/:id_comedor", deleteComedor);

module.exports = router;
