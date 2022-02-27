const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);

const Product = new Schema({
    name: { type: String,},
    price: { type: Number,},
    details: { String, },
    image: { String, },
    material: { type: Date, },
    slug: { type: String, slug: 'name', unique: true },

}, {
    timestamps: true,
});

module.exports = mongoose.model('Product', Product);