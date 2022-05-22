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
      through: 'Enrollments',
      foreignKey: 'courseId',
      otherKey: 'personId'
    });
    Course.belongsTo(models.Campus, {
      foreignKey: 'campusId'
    });
    Course.belongsTo(models.Department, {
      foreignKey: 'departmentId'
    });
  };
  return Course;
};
