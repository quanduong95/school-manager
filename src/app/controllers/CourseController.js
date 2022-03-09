
const Course = require('../models/Course');
const Teacher = require('../models/Teacher');


class CourseController{
    //[GET] all students
    async getAll(req, res) {
        let courses = await Course.find({});
        console.log(courses);
        res.send();
    }
    
}

module.exports = new CourseController();