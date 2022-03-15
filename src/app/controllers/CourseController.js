const mongoose = require('mongoose');
const Teacher = require('../models/Teacher');
const Course = require('../models/Course');


class CourseController{
    //[GET] all students
    async getAll(req, res) {
        let course = await Course.find({});
        res.json(course);
    }
    
}

module.exports = new CourseController();
