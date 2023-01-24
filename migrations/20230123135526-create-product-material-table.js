"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("produk_bahan", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      kode_produk: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: "products",
          key: "kode_produk",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      kode_bahan: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: "bahan_baku",
          key: "kode",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      jumlah_bahan: {
        type: Sequelize.INTEGER,
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
    await queryInterface.dropTable("produk_bahan");
  },
};
