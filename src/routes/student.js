const express = require('express');
const router = express.Router();
const verifyToken = require('../lib/verifyToken');

const StudentController = require('../app/controllers/StudentController')
router.get('/all', verifyToken, StudentController.getAll);


module.exports = router;