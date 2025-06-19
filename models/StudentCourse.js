const {Sequelize, DataTypes} = require("sequelize")
const sequelize = require('../utils/db-connection')

const StudentCourses = sequelize.define("studentcourses", {
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    }
})

module.exports = StudentCourses;