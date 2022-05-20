const { Person, Course  } = require('../models');

async function lookupPersonAndCourses(personId) {
  // Find person and associated courses by `personId`
  return await Person.findByPk(personId, {
    include: 'Courses'
  });
};

async function lookupPersonByLastName(lastName) {
  // Find people by `lastName`
  return await Person.findAll({
    lastName
  });
};

async function lookupCoursesByPersonEmail(email) {
  // Find person by `email` and return associated courses
  const people = await Person.findOne({
    email
  });

  console.log(people.Enrollments);

  return await people.Course.length;
};

module.exports = {
  lookupPersonAndCourses,
  lookupPersonByLastName,
  lookupCoursesByPersonEmail,
};
