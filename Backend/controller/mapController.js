const mapService = require('../services/mapService');
const { validationResult } = require('express-validator');

module.exports.getCoordinates = async(req,res,next) => {

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() });
    }

    const { address } = req.query;
    try{
        const coordinates = await mapService.getAddressCoordinates(address);
        res.status(200).json({ coordinates });
    }catch(err){
        res.status(401).json({message: "Coordinates not found!"})
        next(err);
    }
} 

module.exports.getDistanceTime = async(req,res,next) => {
    try{
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({ errors: errors.array() });
        }

        const { origin, destination } = req.query;
        const distanceTime = await mapService.getDistanceTime(origin, destination);
        res.status(200).json({ distanceTime });
    }catch(err){
        res.status(401).json({message: "Distance and time not found!"})
        next(err);
    }
}

module.exports.getAutoCompleteSuggestions = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { input } = req.query;
        if (!input) {
            return res.status(400).json({ message: "Input query is required." });
        }

        const autocompleteSuggestions = await mapService.getAutoCompleteSuggestions(input);

        if (!autocompleteSuggestions || autocompleteSuggestions.length === 0) {
            return res.status(404).json({ message: "No suggestions found!" });
        }

        res.status(200).json({ autocompleteSuggestions });
    } catch (err) {
        res.status(500).json({ message: "Internal server error" });
    }
};
