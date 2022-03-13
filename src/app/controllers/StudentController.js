const Student = require('../models/Student');
const jwt = require("jsonwebtoken");
require('dotenv').config();
const tokenSecretKey = process.env.TOKEN_SECRET_KEY;

class StudentController{
    //[GET] all students
    async getAll(req, res) {
                Student.find({})
                    .then(students => {
                        console.log(students);
                        res.send();
                    }).catch(error => {
                        res.send(error);
                    });

    }
    
}

module.exports = new StudentController();