const express = require('express');
const router = express.Router();
const captainController = require('../controller/captainController');
const { body } = require('express-validator');
const authMiddleware = require('../middlewares/auth');

router.post('/register',[
    body('email').isEmail().withMessage('Invalid email'),
    body('fullName.firstName').isLength({ min: 3 }).withMessage('First Name must be 3 characters long'),
    body('password').isLength({ min: 6 }).withMessage('Password must be 6 characters long!'),
    body('vehicle.plate').isLength({ min: 3 }).withMessage('Plate must be 3 characters long!'),
    body('vehicle.color').isLength({ min: 3 }).withMessage('Color must be 3 characters long!'),
    body('vehicle.capacity').isInt({ min: 1 }).withMessage('Capacity must be 1!'),
    body('vehicle.vehicleType')
    .toLowerCase() 
    .isIn(['car', 'motorcycle', 'bus'])
    .withMessage('Vehicle type must be one of: car, motorcycle, or bus'),
],
    captainController.registerCaptain
)

router.post('/login',[
    body('email').isEmail().withMessage('invalid email'),
    body('password').isLength({ min: 6 }).withMessage('Password must be 6 characters long!')
],
    captainController.loginCaptain
)

router.get('/profile',authMiddleware.authCaptain, captainController.getCaptainProfile);

router.get('/logout', authMiddleware.authCaptain, captainController.logoutCaptain);

module.exports = router;