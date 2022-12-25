function createModelProdukBahan(Sequelize, DataTypes) {
  const produkBahan = Sequelize.define(
    "Produk_Bahan",
    {
      kode_produk: {
        type: DataTypes.STRING(10),
        allowNull: false,
        references: {
          model: "produk",
          key: "kode_produk",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      kode_bahan: {
        type: DataTypes.STRING(10),
        allowNull: false,
        references: {
          model: "bahan_baku",
          key: "kode",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      jumlah_bahan: {
        type: DataTypes.INTEGER(10),
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
  produkBahan.removeAttribute('id');
  return produkBahan;
}

module.exports = createModelProdukBahan;
