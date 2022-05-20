'use strict';
module.exports = (sequelize, DataTypes) => {
  const Person = sequelize.define('Person', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});
  Person.associate = function(models) {
    // associations can be defined here
    Person.belongsToMany(models.Course, {
      through: 'Enrollment',
      foreignKey: 'personId',
      otherKey: 'courseId'
    });
  };
  return Person;
};
