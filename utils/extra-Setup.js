function applyExtraSetup(sequelize) {
  const { User, Role, Bahan_Baku, Product, Produk_Bahan } = sequelize.models;

  Role.hasMany(User, {
    foreignKey: "id_role",
    sourceKey: "id",
  });

  User.belongsTo(Role, {
    foreignKey: "id_role",
    sourceKey: "id",
  });
  
  User.hasMany(User, {
    foreignKey: "id_owner",
    sourceKey: "id",
    as: "Owner",
  });

  User.belongsTo(User, {
    foreignKey: "id_owner",
    sourceKey: "id",
    as: "Admin",
  });

  Product.belongsToMany(Bahan_Baku, {
    through: Produk_Bahan,
    as: "Bahan",
    foreignKey: "kode_produk",
  });

  Bahan_Baku.belongsToMany(Product, {
    through: Produk_Bahan,
    as: "Product",
    foreignKey: "kode_bahan",
  });
}

module.exports = applyExtraSetup;
