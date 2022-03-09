const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb+srv://quandn95:Duongnhatquan95@cluster0.jnwuw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            
        });
        console.log("Connect succesfully!");
    } catch (error) {
        console.log(('Connect failed: ' + error.message));
    }
}
module.exports = { connect };
