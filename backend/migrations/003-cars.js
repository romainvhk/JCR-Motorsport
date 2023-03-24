'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('cars', { 
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      model: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      mileage: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      year: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      description: {
        type: Sequelize.TEXT('long'),
        allowNull: false,
      },
      price: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      brand_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'brands',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      createdAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE,
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('cars');
  }
};