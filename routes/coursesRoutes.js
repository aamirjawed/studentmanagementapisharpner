const express = require("express");
const coursesController = require('../controllers/courseController')
const router  = express.Router();


router.post('/add-course', coursesController.addCourse)


module.exports = router