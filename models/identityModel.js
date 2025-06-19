const {Sequelize, DataTypes} = require("sequelize")
const sequelize = require('../utils/db-connection.js')



const IdentityCard  = sequelize.define('identitycard', {
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    card_no:{
        type:DataTypes.INTEGER,
        unique:true,
        allowNull:false
    },
    
})


module.exports = IdentityCard