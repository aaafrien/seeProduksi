const { Product, Bahan_Baku, sequelize } = require("../../models");

const productService = {
  getAllProducts: async (id_owner) => {
    const products = await Product.findAll({
      where: {
        id_owner,
      },
      include: [
        {
          model: Bahan_Baku,
          as: "Bahan",
          attributes: [
            "kode",
            "nama",
            "jenis",
            "kategori_bahan",
            "harga",
            "satuan",
          ],
          through: {
            as: "Jumlah_bahan",
            attributes: ["id", "jumlah_bahan"],
          },
        },
      ],
    });
    const json = products.map((item) => {
      return item.toJSON();
    });

    const hasil = json.map((item) => {
      item.Bahan = item.Bahan.map((data) => {
        return {
          kode_bahan: data.kode,
          nama: data.nama,
          jenis: data.jenis,
          kategori_bahan: data.kategori_bahan,
          harga: data.harga,
          satuan: data.satuan,
          jumlah: data.Jumlah_bahan.jumlah_bahan,
        };
      });
      return item;
    });
    return hasil;
  },
  getProduct: async (id) => {
    const product = await Product.findByPk(id);
    if (!product) {
      throw new Error("Product not found");
    }
    return product;
  },
  updateProduct: async (id, product) => {
    const updateProduct = await Product.findByPk(id);
    if (!updateProduct) {
      throw new Error("Product not found");
    }
    await updateProduct.update(product);

    return updateProduct;
  },
  deleteProduct: async (id) => {
    const deleteProduct = await Product.destroy({
      where: {
        id,
      },
    });
    if (!deleteProduct) {
      throw new Error("Product not found");
    }
    return deleteProduct;
  },
  addProduct: async (product, bahan) => {
    const t = await sequelize.transaction();
    const dataBahan = [];
    const produk = await Produk.findOne({
      where: {
        kode_produk: product.kode_produk,
        id_owner: product.id_owner,
      },
    });
    if (produk) {
      throw new Error("Kode Produk already in use");
    }
    const addProduk = await Product.create(
      {
        product,
      },
      { transaction: t }
    );
    for (const bahanBaku of bahan) {
      const checkBahan = await Bahan_Baku.findOne({
        where: {
          kode: bahanBaku.kode_bahan,
          id_owner,
        },
      });
      if (!checkBahan) {
        throw new Error("Bahan not found");
      }
      await Produk_Bahan.create(
        {
          kode_produk: product.kode_produk,
          kode_bahan: bahanBaku.kode_bahan,
          jumlah_bahan: bahanBaku.jumlah_bahan,
          id_owner: product.id_owner,
        },
        { transaction: t }
      ).then((dataBahanBaku) => {
        dataBahan.push(dataBahanBaku);
      });
    }
    await t.commit();

    return { addProduk, dataBahan };
  },
};

module.exports = productService;
