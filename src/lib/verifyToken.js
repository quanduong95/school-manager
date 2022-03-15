const jwt = require('jsonwebtoken');
require('dotenv').config();
const tokenSecretKey = process.env.TOKEN_SECRET_KEY;
module.exports = function verifyToken(req, res, next) { 
    //get auth header value
    try {
        const bearerHeader = req.headers.authorization;
        if (bearerHeader) {
            const token = bearerHeader.split(" ")[1];
            jwt.verify(token, tokenSecretKey, function (err, decoded) {
                if (err) {
                    res.sendStatus(403);
                } else {
                    next();
                }
              });
        } else {
            //Forbidden status code/ Unauthorized
            res.sendStatus(403);
        }  
    } catch (err) {
        res.send(err);
    }

}; 