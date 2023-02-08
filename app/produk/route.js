const express = require('express');
const authenticationToken = require('../../middleware/authenticationToken');
const { handlerAddProduk, handlerGetAllProduk, handlerDeleteProduk, handlerPutProduk, handlerPutProdukBahan, handlerAddBahanInProduk, handlerDeleteBahanInProduk, handlerGetDetailProduk } = require('./handler');
const router = express.Router();

// For Produk 
router.get('/', authenticationToken, handlerGetAllProduk);
router.get('/:id_product', authenticationToken, handlerGetDetailProduk);
router.post("/", authenticationToken, handlerAddProduk);
router.put("/:id_product", authenticationToken, handlerPutProduk);
router.delete("/:id_product", authenticationToken, handlerDeleteProduk);

// For Bahan in Produk
router.post("/:id_product/material", authenticationToken, handlerAddBahanInProduk);
router.put("/:id_product/material/:id_material", authenticationToken, handlerPutProdukBahan);
router.delete("/:id_product/material/:id_material", authenticationToken, handlerDeleteBahanInProduk);
module.exports = router;