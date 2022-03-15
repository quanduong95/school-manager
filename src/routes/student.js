const express = require('express');
const router = express.Router();
const verifyToken = require('../lib/verifyToken');

const StudentController = require('../app/controllers/StudentController')

//get all students.
router.get('/all', verifyToken, StudentController.getAll);
//get student with id by parameter.
router.get('/id/:id', verifyToken, StudentController.getStudentById);



module.exports = router;