function createModelProdukBahan(Sequelize, DataTypes) {
  const produkBahan = Sequelize.define(
    "Produk_Bahan",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      kode_produk: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
          model: "product",
          key: "kode_produk",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      kode_bahan: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
          model: "bahan_baku",
          key: "kode",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      jumlah_bahan: {
        type: DataTypes.INTEGER,
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
      tableName: "produk_bahan",
    }
  );
  return produkBahan;
}

module.exports = createModelProdukBahan;
