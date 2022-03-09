const express = require('express');
const path = require('path');
const app = express();
const morgan = require('morgan');
const routeIndex = require('./routes');
const port = 5500;
const db = require('./config');
const bodyParser = require('body-parser')


//connect to DB
db.connect();

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
app.use(morgan('combined'));

routeIndex(app);
app.listen(port, () => {
    console.log(`Listening at  http://localhost:${port}`);
});


