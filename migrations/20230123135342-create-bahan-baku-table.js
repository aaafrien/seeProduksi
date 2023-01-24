"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("bahan_baku", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      kode: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      nama: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      jenis: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      kategori_bahan: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      harga: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      satuan: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      stok: {
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
      id_owner: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "users",
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("bahan_baku");
  },
};
