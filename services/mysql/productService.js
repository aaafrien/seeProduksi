const { Product, Material, Material_Product, sequelize } = require("../../models");

const productService = {
  getAllProducts: async (id_owner) => {
    const products = await Product.findAll({
      where: {
        id_owner,
      },
      include: [
        {
          model: Material,
          as: "Materials",
          attributes: [
            "id",
            "code",
            "name",
            "type",
            "material_category",
            "price",
            "unit",
          ],
          through: {
            as: "Material_Product",
            attributes: ["id", "material_quantity"],
          },
        },
      ],
    });
    
    const json = products.map((item) => {
      return item.toJSON();
    });

    const hasil = json.map((item) => {
      item.Materials = item.Materials.map((data) => {
        return {
          id: data.id,
          code: data.code,
          name: data.name,
          type: data.type,
          material_category: data.material_category,
          price: data.price,
          unit: data.unit,
          material_quantity: data.Material_Product.material_quantity,
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
    try {
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
          code: product.code,
          name: product.name,
          category: product.category,
          price: product.price,
          id_owner: product.id_owner,
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
            id_product: addProduk.id,
            id_material: bahanBaku.id,
            material_quantity: bahanBaku.material_quantity,
          },
          { transaction: t }
        ).then((dataBahanBaku) => {
          dataBahan.push(dataBahanBaku);
        });
      }
      await t.commit();

      return { addProduk, dataBahan };
    } catch (error) {
      await t.rollback();
      throw new Error(error);
    }
  },
};

module.exports = productService;
