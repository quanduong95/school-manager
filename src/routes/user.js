const express = require('express');
const router = express.Router();

const UserController = require('../app/controllers/UserController')
router.post('/register', UserController.register);
router.post('/signin', UserController.signIn);


module.exports = router;