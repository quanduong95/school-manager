const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/web_app_dev', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            
        });
        console.log("Connect succesfully!");
    } catch (error) {
        console.log(('Connect failed: ' + error.message));
    }
}
module.exports = { connect };
