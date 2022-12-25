function applyExtraSetup(sequelize) {
    const { Admin, Owner, Aksesoris, Kain, Kulit, Produk } = sequelize.models;

    Owner.hasMany(Admin, {
        foreignKey: 'email_owner',
        sourceKey: "email_owner",
    });

    Admin.belongsTo(Owner, {
        foreignKey: 'email_owner',
        sourceKey: 'email_owner',
    });

    Aksesoris.hasMany(Produk, {
        foreignKey: "kode_aksesoris",
        sourceKey: "kode_aksesoris",
    });

    Kain.hasMany(Produk, {
        foreignKey: "kode_kain",
        sourceKey: "kode_kain",
    });

    Kulit.hasMany(Produk, {
        foreignKey: "kode_kulit",
        sourceKey: "kode_kulit",
    });

    Produk.belongsTo(Aksesoris, {
        foreignKey: "kode_aksesoris",
        sourceKey: "kode_aksesoris",
    });

    Produk.belongsTo(Kain, {
        foreignKey: "kode_kain",
        sourceKey: "kode_kain",
    });

    Produk.belongsTo(Kulit, {
        foreignKey: "kode_kulit",
        sourceKey: "kode_kulit",
    });
}

module.exports = applyExtraSetup;