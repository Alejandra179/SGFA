const express = require("express");
const router = express.Router();

const { putUser, deleteUser } = require("../controllers/user.controller");

router.put("/update", putUser);
router.delete("/delete", deleteUser);

module.exports = router;
