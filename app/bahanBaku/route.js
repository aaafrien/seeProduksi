const express = require("express");
const authenticationToken = require("../../middleware/authenticationToken");
const {handlerAddBahanBaku, handlerPutBahanBaku, handlerDeleteBahanBaku, handlerGetBahanBaku } = require("./handler");
const router = express.Router();

router.get("/", authenticationToken, handlerGetBahanBaku);
router.post("/", authenticationToken, handlerAddBahanBaku);
router.put("/:id_material", authenticationToken, handlerPutBahanBaku);
router.delete("/:id_material", authenticationToken, handlerDeleteBahanBaku);

module.exports = router;