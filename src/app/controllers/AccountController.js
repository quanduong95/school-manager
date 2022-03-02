const bcrypt = require('bcrypt');
const Account = require('../models/Account');
const jwt = require('jsonwebtoken');
class AccountController{
    //GET /accounts/signin
    signIn(req, res) {
        res.render('sign-in');
    }

    //GET /accounts/signup
    signUp(req,res) {
        res.render('sign-up');
    }

    //POST api/accounts/register
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
    //POST api/accounts/signIn    
    async logIn(req, res,next) {
        const { username, password } = req.body;
        const user = await Account.findOne({ userName: username },);
        if (!user) {
            return {
                message: 'User not found',
                status: 'userNotFound'

            };
        }
        try {
            const isMatched = await bcrypt.compare(password, user.password);
            const token = jwt.sign({ id: user._id }, 'token');
            if (isMatched) {
                return {
                    message: 'Logged in successfully',
                    status: 'passed',
                    token: token,
                }
            } else {
                return {
                    message: 'Incorrect password',
                    status: 'failed'
                
                }
            }
         }
        catch(error) {
            return {
                message: error,
                status: 'failed'
            
            }
        };
    }
}

module.exports = new AccountController();       