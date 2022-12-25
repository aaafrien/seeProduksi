function createModelKulit(Sequelize, DataTypes) {
  const Kulit = Sequelize.define(
    "Kulit",
    {
      kode_kulit: {
        type: DataTypes.STRING(10),
        allowNull: false,
        primaryKey: true,
      },
      jenis_kulit: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      satuan_kulit: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      stok_kulit: {
        type: DataTypes.INTEGER(10),
        allowNull: false,
      },
      harga_kulit: {
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
      tableName: "kulit",
    }
  );
  return Kulit;
}

module.exports = createModelKulit;
