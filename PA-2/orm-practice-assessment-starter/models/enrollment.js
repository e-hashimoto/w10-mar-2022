'use strict';
module.exports = (sequelize, DataTypes) => {
  const Enrollment = sequelize.define('Enrollment', {
    personId: DataTypes.INTEGER,
    courseId: DataTypes.INTEGER
  }, {});
  Enrollment.associate = function(models) {

  };
  return Enrollment;
};
