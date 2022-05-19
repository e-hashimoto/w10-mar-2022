'use strict';
module.exports = (sequelize, DataTypes) => {
  const Recipes = sequelize.define('Recipes', {
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
  }, {});
  Recipes.associate = function(models) {
    Recipes.hasMany(models.Instruction, {
      foreignKey: 'recipeId',
      onDelete: 'CASCADE',
      hooks: true
  });
    Recipes.hasMany(models.Ingredient, {
      foreignKey: 'recipeId',
      onDelete: 'CASCADE',
      hooks: true
    });
  };
  return Recipes;
};
