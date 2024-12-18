const express = require('express');
const router = express();
const rideController = require('../controller/rideController');
const auth = require('../middlewares/auth');
const { body, query } = require('express-validator'); 

router.post('/create',
    auth.authUser,
    body('pickup').isString().isLength({ min: 3 }).withMessage('Invalid pickup address'),
    body('destination').isString().isLength({ min: 3 }).withMessage('Invalid destination address'),
    body('vehicleType').isString().isIn([ 'auto', 'car', 'moto' ]).withMessage('Invalid vehicle type'),
    rideController.createRide
)

router.get('/get-fare',
    auth.authUser,
    query('pickup').isString().isLength({min:3}).withMessage('Invalid pickup address'),
    query('destination').isString().isLength({min:3}).withMessage('Invalid destination address'),
    rideController.getFare
)

router.post('/confirm',
    auth.authCaptain,
    body('rideId').isMongoId().withMessage('invalid id'),
    rideController.confirmRide
)

router.get('/start-ride',
    auth.authCaptain,
    query('rideId').isMongoId().withMessage('invalid id'),
    query('otp').isString().isLength({ min: 6, max: 6 }).withMessage('invalid otp'),
    rideController.startRide
)

router.post('/end-ride',
    auth.authCaptain,
    body('rideId').isMongoId().withMessage('invalid id'),
    rideController.endRide
)

module.exports = router