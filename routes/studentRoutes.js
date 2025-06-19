const express = require("express");
const { addNewStudent, getAllStudents, getStudentWithId, updateStudent, deleteStudent, addingValueToStudentAndIdentityTable } = require("../controllers/studentController");

const router  = express.Router();

router.post('/add', addNewStudent)
router.get('/getAllStudents', getAllStudents)
// router.get('/getAllStudents/:id', getStudentWithId)
router.put('/update/:id', updateStudent)
router.delete('/delete/:id', deleteStudent)

router.post('/addingStudentWithCard', addingValueToStudentAndIdentityTable)


module.exports = router