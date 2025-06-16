const db = require('../utils/db-connection')

const addNewStudent  = (req,res) => {
    const {name, email, age} = req.body;

    if(!name || !email || !age){
            res.send("All fields are required")
        }

    const addStudentQuery = "INSERT INTO studentManagement(name, email, age) values (?,?,?)"

    db.execute(addStudentQuery, [name, email, age], (err) => {
        if(err){
            console.log(err)
            res.status(500).send(err.message)
            db.end()
            return
        }

        

        console.log("New Student Added")
        res.status(200).send(`Student with name ${name} is added`)
    })
}


const getAllStudents = (req,res) => {
    
    const query = 'select * from studentManagement'

    db.execute(query, (err, result) => {
        if(err){
            console.log(err)
            res.status(500).send(err.message)
            db.end()
            return
        }

        console.log("List of All Students")
        res.status(200).send(result)
    })
}

const getStudentWithId = (req,res) => {
    const {id} = req.params;

    if(!id){
        return res.status(404).send("Student id is required")
    }

    const query = `select * from studentManagement where id = ?`

    db.execute(query, [id], (err, result) => {
        if(err){
            console.log(err)
            res.status(500).send(err.message)
            db.end()
            return
        }

        if(result.length === 0){
            res.send("No student found")
        }

        console.log("Student found")
        res.status(200).send(result)
    }) 
}


const updateStudent = (req, res) => {
    const {id} = req.params;
    const {name, email, age} = req.body

    if(!id){
        return res.status(400).send("Id is required")
    }
    if(!name && !email && !age){
        return res.status(400).send("At least one field is required")
    }
    const query = 'UPDATE studentManagement set name = coalesce(?, name), email = coalesce(?, email), age = coalesce(?, age) where id = ?';

    db.execute(query, [name, email, age, id], (err, result) => {
        if(err){
            console.log(err)
            res.status(500).send(err.message)
            db.end()
            return;
        }

        if(result.affectedRows === 0){
            res.status(404).send("Student not found")
            return
        }

        res.status(200).send(`Student with id ${id} updated successfully`)

    })

  

}

const deleteStudent = (req, res) => {
    const {id} = req.params

    if(!id){
        res.status(400).send("Id is required")
    }

    const query = "DELETE FROM studentManagement WHERE ID = ?"

    db.execute(query, [id], (err, result) => {
        if(err){
            console.log(err)
            res.status(500).send(err.message)
            db.end()
            return
        }

        if(result.affectedRows === 0){
            res.send("Student not found")
        }

        res.status(200).send(`Student with ${id} is deleted successfully`)
    })
}

module.exports = {addNewStudent, getAllStudents, getStudentWithId, updateStudent, deleteStudent}