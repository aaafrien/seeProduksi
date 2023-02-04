const { Product, Material_Product, sequelize } = require("../../models");
const productService = require("./productService");
const produkBahanService = {
  addBahan: async (id_product, id_owner, id_material, materials) => {
    const t = await sequelize.transaction();
    const dataBahan = [];
    try {
      const product = await productService.getProduct(id_product);
      // const product = await Produk_Bahan.findOne({
      //   where: {
      //     kode_produk,
      //     id_owner,
      //   },
      // });
      // if (!product) {
      //   throw new Error("Product not found");
      // }
      for (const bahanBaku of materials) {
        await Material_Product.create(
          {
            id_product: product.id,
            id_material: bahanBaku.id,
            material_quantity: bahanBaku.material_quantity,
          },
          { transaction: t }
        ).then((dataBahanBaku) => {
          dataBahan.push(dataBahanBaku);
        });
      }
      await t.commit();

      return dataBahan;
    } catch (error) {
      await t.rollback();
      throw new Error(error);
    }
  },
  updateBahan: async (id_product, id_material, material_quantity) => {
    const bahan = await Material_Product.findOne({
      where: {
        id_product,
        id_material,
      },
    });
    if (!bahan) {
      throw new Error("Material from Product not found");
    }

    await bahan.update({ material_quantity });

    return bahan;
  },
  deleteBahan: async (id_product, id_material) => {
    try {
      const bahanProduk = await Material_Product.findOne({
        where: {
          id_product,
          id_material,
        },
      });

      if (!bahanProduk) {
        throw new Error("Material not found");
      }
      await bahanProduk.destroy();
      return bahanProduk;
    } catch (error) {
      next(error);
    }
  },
};

module.exports = produkBahanService;
