const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('mongoose-type-email');
require('mongoose-type-phone');

const Student = new Schema({
    first_name: { type: String, require: true,},
    last_name: { type: String, require: true,},
    dob: { type: Date, require: true, },
    gender: { type: String, require: true, },
    email: { type: mongoose.SchemaTypes.Email, require: true,},
    phone:{type: mongoose.SchemaTypes.Phone, require: true,},
    address:{type: String, require: true,},
});

module.exports = mongoose.model('student', Student);