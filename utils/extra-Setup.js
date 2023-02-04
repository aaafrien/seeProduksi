function applyExtraSetup(sequelize) {
  const { User, Role, Material, Product, Material_Product } = sequelize.models;

  Role.hasMany(User, {
    foreignKey: "role",
    sourceKey: "id",
  });

  User.belongsTo(Role, {
    foreignKey: "role",
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

  Product.belongsToMany(Material, {
    through: Material_Product,
    as: "Materials",
    foreignKey: "id_product",
  });

  Material.belongsToMany(Product, {
    through: Material_Product,
    as: "Products",
    foreignKey: "id_material",
  });
}

module.exports = applyExtraSetup;
