const mongoose = require('mongoose');
const Teacher = require('../models/Teacher');
const Classroom = require('../models/Classroom');
const Schema = mongoose.Schema;

const Course = new Schema({
    course_name: { type: String,},
    teacher: {type: mongoose.Schema.Types.ObjectId, ref: 'Teacher'},
    // classroom: {type: mongoose.Schema.Types.ObjectId, ref: 'Classroom'},



}, {
    strict: false,
});

module.exports = mongoose.model('course', Course);