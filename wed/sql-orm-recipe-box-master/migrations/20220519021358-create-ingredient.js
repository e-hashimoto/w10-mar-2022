'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Ingredients', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      amount: {
        allowNull: false,
        type: Sequelize.NUMERIC(5,2)
      },
      measurementUnitId: {
        allowNull: false,
        references: { model: "MeasurementUnits"},
        type: Sequelize.INTEGER
      },
      foodStuff: {
        type: Sequelize.STRING
      },
      recipeId: {
        allowNull: false,
        references: { model: "Recipes"},
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Ingredients');
  }
};
