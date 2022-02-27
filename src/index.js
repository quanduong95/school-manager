const express = require('express');
const path = require('path');
const app = express();
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const routeIndex = require('./routes');
const port = 3000;
const db = require('./config/db');
const bodyParser = require('body-parser')

//connect to DB
db.connect();

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

//template engine
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resources/views'));

app.use(morgan('combined'));

routeIndex(app);

app.listen(port, () => {
    console.log(`Listening at  http://localhost:${port}`);
});


