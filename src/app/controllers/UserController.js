const bcrypt = require('bcrypt');
const User = require('../models/User');


class UserController{

    async register(req, res,next) {
        try {
            
            const userName = req.body.userName;
            const password = req.body.password; 
            const confirmedPassword = req.body.confirmedPassword; 
            const hashedPassword = await bcrypt.hash(password, 10);
            if (password === confirmedPassword) {
                User.create({ userName: userName, password: hashedPassword })
                    .then(() => {
                        return res.json({
                            message: 'Registered account successfully',
                            status: 200,
                        });
                    })
                    .catch(() => {
                        return res.json({
                            message: 'User existed',
                            status: 400
                        });
                    });   
            } else {
                return res.json({
                    message: 'Mismatched passwords',
                    status: 400
                });
            }
        } catch {
            res.status(500).send();
        }

    } 

    async logIn(req, res,next) {
        const { username, password } = req.body;
        const user = await User.findOne({ userName: username },);
        if (!user) {
            return res.json({
                message: 'Username does not exist!',
                status: 400
            });
        }
        try {
            const isMatched = await bcrypt.compare(password, user.password);
            if (isMatched) {
                return res.json({
                    message: 'Logged in successfully', 
                    status: 200,
                });
            } else {
                return res.json({
                    message: 'Password is incorrect',
                    status: 400,
                });
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

module.exports = new UserController();       