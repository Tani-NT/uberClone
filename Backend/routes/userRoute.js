const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const userController = require('../controller/userController');
const auth = require('../middlewares/auth');

router.post('/register', [
    body('email').isEmail().withMessage('invalid email!'),
    body('fullName.firstName').isLength({ min: 3 }).withMessage('First Name must be 3 characters long'),
    body('password').isLength({ min: 6 }).withMessage('Password must be 6 characters long!')
],
    userController.registerUser
)

router.post('/login',[
    body('email').isEmail().withMessage('invalid email'),
    body('password').isLength({ min: 6 }).withMessage('Password must be 6 characters long!')
],
    userController.loginUser
)

router.get('/profile', auth.authUser , userController.getUserProfile);

router.get('/logout',auth.authUser, userController.logoutUser);

module.exports = router;