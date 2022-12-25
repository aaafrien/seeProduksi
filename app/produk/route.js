const express = require('express');
const { handlerAddProduk, handlerGetAllProduk } = require('./handler');
const router = express.Router();

router.get('/:kode_produk', handlerGetAllProduk);
router.post("/", handlerAddProduk);
module.exports = router;