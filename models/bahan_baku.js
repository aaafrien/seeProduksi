function createModelBahanBaku(Sequelize, DataTypes) {
  const bahanBaku = Sequelize.define(
    "Bahan_Baku",
    {
      kode: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
      },
      nama: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      jenis: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      kategori_bahan: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      harga: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      satuan: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      stok: {
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
      tableName: "bahan_baku",
    }
  );
  return bahanBaku;
}

module.exports = createModelBahanBaku;
