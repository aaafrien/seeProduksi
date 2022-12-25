function createModelAksesoris(Sequelize, DataTypes) {
  const Aksesoris = Sequelize.define(
    "Aksesoris",
    {
      kode_aksesoris: {
        type: DataTypes.STRING(10),
        allowNull: false,
        primaryKey: true,
      },
      jenis_aksesoris: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      satuan_aksesoris: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      stok_aksesoris: {
        type: DataTypes.INTEGER(10),
        allowNull: false,
      },
      harga_aksesoris: {
        type: DataTypes.INTEGER(15),
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
      tableName: "aksesoris",
    }
  );
  return Aksesoris;
}

module.exports = createModelAksesoris;
