const Student = require('../models/Student');
const jwt = require("jsonwebtoken");
require('dotenv').config();
const tokenSecretKey = process.env.TOKEN_SECRET_KEY;

class StudentController{
    //[GET] all students
    getAll(req, res) {
                Student.find({})
                    .then(students => {
                        res.json(students);
                    }).catch(error => {
                        res.json(error);
                    });

    }

    //[GET] student by id
    getStudentById(req, res) {
        const id = req.params.id;
        Student.find({ _id: id })
            .then(student => { 
                res.json(student);
            })
            .catch(error => {
                res.json(error);
        })
    }
    
}

module.exports = new StudentController();