"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("kain", {
      kode_kain: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true,
      },
      jenis_kain: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      satuan_kain: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      stok_kain: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      harga_kain: {
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
    await queryInterface.dropTable("kain");
  },
};
