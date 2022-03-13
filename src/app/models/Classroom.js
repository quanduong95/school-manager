const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Course = require('../models/Course');
const Teacher = require('../models/Teacher');

const Classroom = new Schema({
    capacity: { type: Number, require: true,},
    description: { type: String },
    course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course' },
    teacher: {type: mongoose.Schema.Types.ObjectId, ref: 'Teacher'},

});

module.exports = mongoose.model('classroom', Classroom);