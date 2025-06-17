const db = require('../utils/db-connection')
const Student = require('../models/studentModel')

const addNewStudent  = async (req,res) => {

    try {
        const {name, email} = req.body;
        const student = await Student.create({
            name:name,
            email:email
        })

        res.status(200).send(`Student with name ${name} is created`)
    } catch (error) {
        res.status(500).send("Unable to make an entry")
    }
   
}


const getAllStudents = async(req, res) =>{
    try{
        const students = await Student.findAll()
        res.status(200).json(students)
    }catch(err){
        res.status(500).send("Unable to fetch students")
    }
}



const updateStudent = async (req, res) => {

    try {
        const {id} = req.params;
        const {name} = req.body
        
        const student  = await Student.findByPk(id)

        if(!student){
            res.status(404).send("Unable to found the student")
        }
        student.name = name;
        await student.save()
        res.status(200).send("Student data has been updated")
    } catch (error) {
        res.status(500).send("Unable to update the student data")
    }
    

    

  

}

const deleteStudent = async (req, res) => {
    try {
        const {id} = req.params
        const student = await Student.findByPk(id)

        if(!student){
           return res.status(404).send("Student does not exist")
        }

        await student.destroy()
        res.status(200).send("Student data has been deleted")
        
    } catch (error) {
        res.status(500).send("Unable to delete student data")
    }
    
}

module.exports = {addNewStudent, getAllStudents, getStudentWithId, updateStudent, deleteStudent}