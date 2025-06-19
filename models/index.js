const Student = require('./studentModel')
const IdentityCard = require('./identityModel')
const Department = require('./departmentModel')
const Courses = require('./coursesModel')
const StudentCourses = require('./StudentCourse')



// one to one association


Student.hasOne(IdentityCard)
IdentityCard.belongsTo(Student)

// one to many association

Student.hasMany(Department)
Department.belongsTo(Student)

// many to many association

Student.belongsToMany(Courses, {through:StudentCourses})
Courses.belongsToMany(Student, {through:StudentCourses})

module.exports = {Student, IdentityCard, Department, Courses, StudentCourses}