const express = require('express');
const auth = require('../middlewares/auth');
const router = express.Router();
const mapController = require('../controller/mapController');
const { query } = require('express-validator');

router.get('/get-coordinates',
    query('address').isString().isLength({min: 3}) ,
    auth.authUser, 
    mapController.getCoordinates)

router.get('/get-distance-time', 
    query('origin').isString().isLength({ min:3 }),
    query('destination').isString().isLength({ min:3 }),
    auth.authUser, 
    mapController.getDistanceTime);

router.get('/get-suggestions',
    query('input').isString(),
    auth.authUser, 
    mapController.getAutoCompleteSuggestions);

module.exports = router;