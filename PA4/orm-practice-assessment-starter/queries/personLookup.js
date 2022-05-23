const { Person, Course  } = require('../models');

async function lookupPersonAndCourses(personId) {
  // Find person and associated courses by `personId`
  return await Person.findByPk(personId, {
    include: Course,
  })
};

async function lookupPersonByLastName(lastName) {
  // Find people by `lastName`
  return await Person.findAll({
    lastName
  });
};

async function lookupCoursesByPersonEmail(email) {
  // Find person by `email` and return associated courses
  const person = await Person.findOne({
    where: {
      email
    },
    include: Course,
  });

  // console.log(person)

  return person.Courses;
};

module.exports = {
  lookupPersonAndCourses,
  lookupPersonByLastName,
  lookupCoursesByPersonEmail,
};
