const express = require('express');
const router = express.Router();

const CourseController = require('../app/controllers/CourseController')
router.get('/all', CourseController.getAll);


module.exports = router;