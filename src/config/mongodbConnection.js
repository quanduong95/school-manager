const mongoose = require('mongoose');

function connect() {
    try {
        const dbUrl = 'mongodb+srv://quandn95:Duongnhatquan95@cluster0.jnwuw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
        const dbOptions = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
        mongoose.connect(dbUrl, dbOptions);
        return mongoose.connect(dbUrl, dbOptions);
    } catch (error) {
        console.log(('Connect failed: ' + error.message));
    }
}
module.exports = { connect };
