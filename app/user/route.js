const express = require("express");
const authenticationToken = require("../../middleware/authenticationToken");
const loginOwner = require("../../middleware/loginOwner");
const { handlerRegisterOwner, handlerLoginUser, handlerAddAdmin, handlerGetAllUser } = require("./handler");
const router = express.Router();


router.post("/register", handlerRegisterOwner);
router.post("/login", handlerLoginUser);
router.post("/admin/add", authenticationToken, loginOwner, handlerAddAdmin);
router.get('/users', handlerGetAllUser);

module.exports = router;