const { Product, Produk_Bahan, sequelize } = require("../../models");
const productService = require("./productService");
const produkBahanService = {
  addBahan: async (kode_produk, id_owner, kode_bahan, bahan) => {
    const t = await sequelize.transaction();
    const dataBahan = [];
    const product = await Produk_Bahan.findOne({
      where: {
        kode_produk,
        id_owner
      },
    });
    if (!product) {
      throw new Error("Product not found");
    }
    for (const bahanBaku of bahan) {
      await Produk_Bahan.create(
        {
          kode_produk: product.kode_produk,
          kode_bahan: bahanBaku.kode_bahan,
          jumlah_bahan: bahanBaku.jumlah_bahan,
        },
        { transaction: t }
      ).then((dataBahanBaku) => {
        dataBahan.push(dataBahanBaku);
      });
    }
    await t.commit();

    return dataBahan;
  },
  deleteBahan: async (kode_produk, kode_bahan) => {
    const bahanProduk = await Produk_Bahan.findOne({
        where:{
            kode_produk,
            kode_bahan
        }
    });
    if (!bahanProduk) {
      throw new Error("Material not found");
    }
    await bahanProduk.destroy();
    return bahanProduk;
  },
  updateBahan: async (kode_produk, kode_bahan, jumlah_bahan) => {
    const bahan = await Produk_Bahan.findOne({
      where: {
        kode_produk,
        kode_bahan,
      },
    });
    if (!bahan) {
      throw new Error("Material from Product not found");
    }

    await bahan.update(jumlah_bahan);
    return bahan;
  },
};

module.exports = produkBahanService;
