const express = require('express');
const router = express.Router();

const AccountController = require('../app/controllers/AccountController')


//register a new account
router.post('/register', AccountController.register);

//log in
router.post('/login', AccountController.logIn);







module.exports = router;