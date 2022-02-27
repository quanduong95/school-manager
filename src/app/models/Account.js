const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const slug = require('mongoose-slug-generator');


const Account = new Schema({
    userName: { type: String, unique: true },
    password: { type: String,},

});

module.exports = mongoose.model('Account', Account);