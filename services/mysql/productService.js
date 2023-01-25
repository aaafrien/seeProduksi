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
    const produk = await Product.findOne({
      where: {
        code: product.code,
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
      // const checkMaterial = await Material.findOne({
      //   where: {
      //     kode: bahanBaku.code,
      //     id_owner,
      //   },
      // });
      const checkMaterial = await Material.findByPk(bahanBaku.id);
      if (!checkMaterial) {
        throw new Error("Material not found");
      }
      await Material_Product.create(
        {
          id_product: product.id,
          id_bahan: bahanBaku.id_bahan,
          material_quantity: bahanBaku.material_quantity,
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
