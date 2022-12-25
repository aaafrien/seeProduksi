"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("produk", {
      kode_produk: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true,
      },
      nama_produk: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      kategori: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      kode_kain: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: "kain",
          key: "kode_kain",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      kode_kulit: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: "kulit",
          key: "kode_kulit",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      kode_aksesoris: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: "kain",
          key: "kode_aksesoris",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      harga_produk: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("produk");
  },
};
