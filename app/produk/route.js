const express = require('express');
const { handlerAddProduk, handlerGetAllProduk, handlerDeleteProduk } = require('./handler');
const router = express.Router();

router.get('/', handlerGetAllProduk);
router.post("/", handlerAddProduk);
router.delete("/:kode_produk", handlerDeleteProduk);
module.exports = router;