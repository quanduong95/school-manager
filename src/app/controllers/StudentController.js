
const Student = require('../models/Student');


class StudentController{
    //[GET] all students
    async getAll(req, res) {
        let students = await Student.find({});
        console.log(students);
        res.send();
    }
    
}

module.exports = new StudentController();