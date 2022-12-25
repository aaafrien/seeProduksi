function createModelKain(Sequelize, DataTypes) {
  const Kain = Sequelize.define(
    "Kain",
    {
      kode_kain: {
        type: DataTypes.STRING(10),
        allowNull: false,
        primaryKey: true,
      },
      jenis_kain: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      satuan_kain: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      stok_kain: {
        type: DataTypes.INTEGER(10),
        allowNull: false,
      },
      harga_kain: {
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
      tableName: "kain",
    }
  );
  return Kain;
}

module.exports = createModelKain;
