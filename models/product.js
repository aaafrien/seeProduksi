function createModelProduk(Sequelize, DataTypes) {
  const Product = Sequelize.define(
    "Product",
    {
      kode_produk: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
      },
      nama_produk: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      kategori: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      harga_produk: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      tableName: "products",
    }
  );
  return Product;
}

module.exports = createModelProduct;
