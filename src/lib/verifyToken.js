const jwt = require('jsonwebtoken');
module.exports = function verifyToken(req, res, next) { 
    //get auth header value
    try {
        const bearerHeader = req.headers.authorization;
        if (bearerHeader) {
            jwt.verify(bearerHeader, 'aaa', function(err, decoded) {
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
        console.log(err);
    }

}; 