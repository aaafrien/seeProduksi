function createModelProduk(Sequelize, DataTypes) {
  const Produk = Sequelize.define(
    "Produk",
    {
      kode_produk: {
        type: DataTypes.STRING(10),
        allowNull: false,
        primaryKey: true,
      },
      nama_produk: {
        type: DataTypes.STRING(25),
        allowNull: false,
      },
      kategori: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      kode_kain: {
        type: DataTypes.STRING(10),
        allowNull: false,
        references: {
          model: "kain",
          key: "kode_kain",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      kode_kulit: {
        type: DataTypes.STRING(10),
        allowNull: false,
        references: {
          model: "kulit",
          key: "kode_kulit",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      kode_aksesoris: {
        type: DataTypes.STRING(10),
        allowNull: false,
        references: {
          model: "kain",
          key: "kode_aksesoris",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      harga_produk: {
        type: DataTypes.STRING(15),
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
      tableName: "produk",
    }
  );
  return Produk;
}

module.exports = createModelProduk;
