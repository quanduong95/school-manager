const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Classroom = new Schema({
    capacity: { type: Number, require: true,},
    description: { type: String },

});

module.exports = mongoose.model('classroom', Classroom);