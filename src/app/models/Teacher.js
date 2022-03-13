const mongoose = require('mongoose');
const Course = require('../models/Course');
const Schema = mongoose.Schema;
require('mongoose-type-email');
require('mongoose-type-phone');


const Teacher = new Schema({
    first_name: { type: String, require: true,},
    last_name: { type: String, require: true, },
    dob: { type: Date,require: true, },
    gender: { type: String, require: true, },
    email: { type: mongoose.SchemaTypes.Email, require: true,},
    phone:{type: mongoose.SchemaTypes.Phone, require: true,},
    address: { type: String, require: true, },
    course: {type: mongoose.Schema.Types.ObjectId, ref: 'Course'}
},);
module.exports = mongoose.model('teacher', Teacher);