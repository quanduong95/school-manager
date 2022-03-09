const express = require('express');
const router = express.Router();

const StudentController = require('../app/controllers/StudentController')
router.get('/all', StudentController.getAll);


module.exports = router;