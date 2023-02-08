function applyExtraSetup(sequelize) {
  const { User, Role, Material, Product, Material_Product, Transaction } = sequelize.models;

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

  User.hasMany(Transaction, {
    foreignKey: "id_user",
    sourceKey: "id",
  });

  User.hasMany(Transaction, {
    foreignKey: "id_owner",
    sourceKey: "id",
  })

  Transaction.belongsTo(User, {
    foreignKey: "id_user",
    sourceKey: "id",
  });

  Transaction.belongsTo(User, {
    foreignKey: "id_owner",
    sourceKey: "id",
  });

  
}

module.exports = applyExtraSetup;
