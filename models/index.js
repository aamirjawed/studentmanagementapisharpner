const Student = require('./studentModel')
const IdentityCard = require('./identityModel')
const Department = require('./departmentModel')


// one to one association


Student.hasOne(IdentityCard)
IdentityCard.belongsTo(Student)

// one to many associaton

Student.hasMany(Department)
Department.belongsTo(Student)

module.exports = {Student, IdentityCard, Department}