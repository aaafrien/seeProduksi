const express = require('express');
const authenticationToken = require('../../middleware/authenticationToken');
const { handlerAddProduk, handlerGetAllProduk, handlerDeleteProduk, handlerPutProduk, handlerPutProdukBahan, handlerAddBahanInProduk, handlerDeleteBahanInProduk } = require('./handler');
const router = express.Router();

// For Produk 
router.get('/', authenticationToken, handlerGetAllProduk);
router.post("/", authenticationToken, handlerAddProduk);
router.put("/:id_product", authenticationToken, handlerPutProduk);
router.delete("/:id_product", authenticationToken, handlerDeleteProduk);

// For Bahan in Produk
router.post("/:kode_produk/bahan", authenticationToken, handlerAddBahanInProduk);
router.put("/:kode_produk/bahan/:kode_bahan", authenticationToken, handlerPutProdukBahan);
router.delete("/:kode_produk/bahan/:kode_bahan", authenticationToken, handlerDeleteBahanInProduk);
module.exports = router;