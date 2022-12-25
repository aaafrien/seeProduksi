"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("aksesoris", {
      kode_aksesoris: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true,
      },
      jenis_aksesoris: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      satuan_aksesoris: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      stok_aksesoris: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      harga_aksesoris: {
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
    await queryInterface.dropTable("aksesoris");
  },
};
