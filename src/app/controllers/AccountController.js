const bcrypt = require('bcrypt');
const Account = require('../models/Account');
class AccountController{
    
    //POST/account/register
    async register(req, res,next) {
        try {
            
            const userName = req.body.userName;
            const password = req.body.password; 
            const confirmedPassword = req.body.confirmedPassword; 
            const hashedPassword = await bcrypt.hash(password, 10);
            if (password === confirmedPassword) {
                Account.create({ userName: userName, password: hashedPassword })
                    .then(() => {
                        res.send('Created account successfully!')
                    })
                    .catch(() => {
                        res.send('UserName is existed');
                    });   
            } else {
                res.send('Passwords don\'t match');
            }
        } catch {
            res.status(500).send();
        }

    }
    //POST/account/logIn    
    async logIn(req, res,next) {
        const _userName = req.body.userName; 
        const _password = req.body.password; 
        const user = await Account.findOne({ userName: _userName});
        if (!user) {
            return res.status(400).send('Can\' find user ');
        }
        try {
            const isMatched = await bcrypt.compare(_password, user.password);
            if (isMatched) {
                res.send('Succcess. You are now logged in!');
            } else {
                res.send('Incorrect password');
            }
         }
        catch {
            res.status(500).send();
        };
    }
}

module.exports = new AccountController();       