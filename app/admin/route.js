const express = require("express");
const authenticationToken = require("../../middleware/authenticationToken");
const { handlerLoginAdmin } = require("./handler");
const router = express.Router();


router.post("/login", handlerLoginAdmin);


module.exports = router;