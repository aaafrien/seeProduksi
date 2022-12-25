"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("kulit", {
      kode_kulit: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true,
      },
      nama_kulit: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      satuan_kulit: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      stok_kulit: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      harga_kulit: {
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
    await queryInterface.dropTable("kulit");
  },
};
