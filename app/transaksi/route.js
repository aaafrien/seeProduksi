const express = require("express");
const authenticationToken = require("../../middleware/authenticationToken");
const { handlerGetAllTransaction, handlerAddTransaction } = require("./handler");

const router = express.Router();

router.get("/", authenticationToken, handlerGetAllTransaction);

router.post("/add", authenticationToken, handlerAddTransaction);

module.exports = router;