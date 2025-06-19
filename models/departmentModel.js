const {Sequelize, DataTypes} = require("sequelize")
const sequelize = require('../utils/db-connection')


const Department = sequelize.define('department', {
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true    
    },

    department_name:{
        type:DataTypes.STRING,
        
    }
})

module.exports = Department;