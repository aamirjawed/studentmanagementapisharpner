const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("testdb", "root", "8083571820", {
  host: "localhost",
  dialect: "mysql",
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection to the databases has been created using sequelize");
  } catch (error) {
    console.log(error);
  }
})();

module.exports = sequelize;

// const mysql = require('mysql2')

// const connection = mysql.createConnection({
//     host:'localhost',
//     user:"root",
//     password:"8083571820",
//     database:"testdb"

// })

// connection.connect((err) => {
//     if(err){
//         console.log(err)
//         return
//     }

//     console.log("Database connection has been created")

//     const creationQuery = `create table if not exists studentManagement(
//         id int auto_increment primary key,
//         name varchar(20),
//         email varchar(20) unique,
//         age int
//     )`

//     connection.execute(creationQuery, (err) =>{
//         if(err){
//             console.log(err)
//             connection.end()
//             return
//         }

//         console.log('Table is created')
//     })
// })

// module.exports  = connection
