const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Course = new Schema({
    course_name: { type: String,},
    teacher_id: {type: mongoose.Schema.Types.ObjectId, ref: 'teacher'},
    classroom_id: {type: mongoose.Schema.Types.ObjectId, ref: 'classroom'},



});

module.exports = mongoose.model('course', Course);