const produkBahanService = require("../../services/mysql/materialProductService");
const productService = require("../../services/mysql/productService");
module.exports = {
  handlerAddProduk: async (req, res, next) => {

    try {
      const id_owner = req.user.id_owner;
      const { code, name, category, price, material } =
        req.body;
      const hasil = await productService.addProduct({ code, name, category, price, id_owner}, material);

      res.status(201).json({
        status: "Sucess",
        message: "Successfully add Produk",
        data: { product: hasil.addProduk, material: hasil.dataBahan },
      });
    } catch (error) {
      next(error);
    }
  },

  handlerGetAllProduk: async (req, res, next) => {
    try {
      const hasil = await productService.getAllProducts(req.user.id_owner);
      res.status(200).json({
        status: "Success",
        message: "Successfully get All Produk",
        data: hasil,
      });
    } catch (error) {
      next(error);
    }
  },

  handlerDeleteProduk: async (req, res, next) => {
    try {
      const id_owner = req.user.id_owner;
      const { id_product } = req.params;

      await productService.deleteProduct(id_product);

      res.status(200).json({
        status: "Success",
        message: "Successfully delete produk",
      });
    } catch (error) {
      next(error);
    }
  },

  handlerPutProduk: async (req, res, next) => {
    try {
      const id_owner = req.user.id_owner;
      const { id_product } = req.params;
      const { name, category, price } = req.body;
      await productService.updateProduct(id_product, {name, category, price});
      res.status(201).json({
        status: "Success",
        message: "Successfully update Produk",
      });
    } catch (error) {
      next(error);
    }
  },

  handlerPutProdukBahan: async (req, res, next) => {

    try {
      const { id_product, id_material} = req.params;
      const { material_quantity } = req.body;
      await produkBahanService.updateBahan(id_product, id_material, material_quantity);
      res.status(201).json({
        status: "Success",
        message: "Successfully update Bahan in Produk",
      });
    } catch (error) {
      next(error);
    }
  },

  handlerAddBahanInProduk: async (req, res, next) => {
    try {
      const id_owner = req.user.id_owner;
      const { id_product, id_material } = req.params;
      const { materials } = req.body;
      const dataBahan = await produkBahanService.addBahan(id_product, id_owner, id_material, materials);

      res.status(201).json({
        status: "Success",
        message: "Successfully add Bahan in Produk",
        data: dataBahan,
      });
    } catch (error) {
      next(error);
    }
  },

  handlerDeleteBahanInProduk: async (req, res, next) => {
    try {
      const id_owner = req.user.id_owner;
      const { id_product, id_material } = req.params;
      
      await produkBahanService.deleteBahan(id_product, id_material);
      res.status(201).json({
        status: "Success",
        message: "Successfully delete bahan in produk",
      });
    } catch (error) {
      next(error);
    }
  },
};
