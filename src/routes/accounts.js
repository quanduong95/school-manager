const express = require('express');
const router = express.Router();

const AccountController = require('../app/controllers/AccountController')


router.get('/signin', AccountController.signIn);
router.post('/signin', AccountController.logIn);
router.get('/signup', AccountController.signUp);
router.post('/signup', AccountController.register);





module.exports = router;