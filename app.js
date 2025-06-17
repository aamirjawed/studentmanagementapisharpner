const express = require('express')
const db = require('./utils/db-connection')
const studentRoutes = require('./routes/studentRoutes')

const app  = express()

app.use(express.json())


app.get('/', (req,res) => {
    res.send("Student Management API")
})

app.use('/students', studentRoutes)

db.sync({force:true}).then(() => {
    app.listen(3000, () => {
    console.log("Server is listening on 3000")
})
}).catch((err) => {
    console.log(err)
})
