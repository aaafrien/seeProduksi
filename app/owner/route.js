const express = require("express");
const authenticationToken = require("../../middleware/authenticationToken");
const loginOwner = require("../../middleware/loginOwner");
const { handlerRegisterOwner, handlerLoginOwner, handlerAddAdmin } = require("./handler");
const router = express.Router();


router.post("/register", handlerRegisterOwner);
router.post("/login", handlerLoginOwner);
router.post("/admin/add", authenticationToken, loginOwner, handlerAddAdmin);

module.exports = router;