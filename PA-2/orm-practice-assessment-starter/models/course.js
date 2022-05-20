'use strict';
module.exports = (sequelize, DataTypes) => {
  const Course = sequelize.define('Course', {
    name: DataTypes.STRING,
    level: DataTypes.INTEGER,
    campusId: DataTypes.INTEGER,
    departmentId: DataTypes.INTEGER
  }, {});
  Course.associate = function(models) {
    Course.belongsToMany(models.Person, {
      through: 'Enrollment',
      foreignKey: 'courseId',
      otherKey: 'personId'
    });
    Course.belongsToMany(models.Campus, { foreignKey: 'campusId'});
    Course.belongsToMany(models.Department, { foreignKey: 'departmentId'});
  };
  return Course;
};
