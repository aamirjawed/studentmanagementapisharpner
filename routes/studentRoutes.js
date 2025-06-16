const express = require("express");
const { addNewStudent, getAllStudents, getStudentWithId, updateStudent, deleteStudent } = require("../controllers/studentController");

const router  = express.Router();

router.post('/add', addNewStudent)
router.get('/getAllStudents', getAllStudents)
router.get('/getAllStudents/:id', getStudentWithId)
router.put('/getAllStudents/:id', updateStudent)
router.delete('/:id', deleteStudent)


module.exports = router