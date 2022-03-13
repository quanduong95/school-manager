const express = require('express');
const path = require('path');
const session = require('express-session');
const app = express();
require('dotenv').config();
const morgan = require('morgan');
const routeIndex = require('./routes');
const port =  9000;
const db = require('./config/mongodbConnection');
const { auth } = require('express-openid-connect');
const bodyParser = require('body-parser')
const cors = require('cors');


app.use(cors())


//connect to DB
db.connect();

//allows express to read the data
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(morgan('combined'));


//Auth0
app.use(
    auth({
        authRequired: false,
        auth0Logout: true,
        issuerBaseURL: process.env.ISSUER_BASE_URL ,
        baseURL: process.env.BASE_URL,
        clientID: process.env.CLIENT_ID ,
        secret: process.env.SECRET ,
        idpLogout: true,
  })
);

app.get('/', (req, res) => {
    res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
})

//run the routes
routeIndex(app);

app.listen(port, () => {
    console.log(`Listening at  http://localhost:${port}`);
});


