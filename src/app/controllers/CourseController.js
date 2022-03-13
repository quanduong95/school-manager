const mongoose = require('mongoose');
const Teacher = require('../models/Teacher');
const Course = require('../models/Course');


class CourseController{
    //[GET] all students
    async getAll(req, res) {
        let course = await Course.find({})
            .populate({
                path: "teacher",
                model: "Teacher"
            });

        console.log(course);
        res.send();
    }
    
}

module.exports = new CourseController();
