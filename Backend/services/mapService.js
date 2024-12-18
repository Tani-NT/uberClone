const axios = require('axios');
const captainModel = require('../models/captainModel');

module.exports.getAddressCoordinates = async (address) => {
    const apiKey = process.env.GOOGLE_MAP_KEY;
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${apiKey}`;

    try{
        const response = await axios.get(url);
        console.log(response.data);
        if(response.data.status === 'OK'){
            const location = response.data.results[0].geometry.location;
            return {
                ltd: location.lat,
                lng: location.lng
            };
        } else{
            throw new Error('Unable to get address coordinates');
        }
    } catch(err){
        console.error('Error getting address coordinates:', err.message);
        throw err;
    }
}

module.exports.getDistanceTime = async (origin, destination) => {
    if (!origin || !destination) {
        throw new Error('Both origin and destination are required');
    }

    const apiKey = process.env.GOOGLE_MAP_KEY;
    const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${encodeURIComponent(origin)}&destinations=${encodeURIComponent(destination)}&key=${apiKey}`;

    try {
        const response = await axios.get(url);
        console.log("res", response.data);

        if (response.data.status === 'OK') {
            const element = response.data.rows[0].elements[0];

            if (element.status === 'ZERO_RESULTS') {
                throw new Error('Unable to get distance and time');
            }

            return element;
        } else {
            throw new Error(`Google API returned status: ${response.data.status}`);
        }
    } catch (err) {
        console.error('Error getting distance and time:', err.message);
        throw err;
    }
};

module.exports.getAutoCompleteSuggestions = async (input) => {
    if (!input) {
        throw new Error('Input is required');
    }

    const apiKey = process.env.GOOGLE_MAP_KEY;
    const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${encodeURIComponent(input)}&key=${apiKey}`;

    try {
        const response = await axios.get(url);

        if (response.data.status === 'OK') {
            return response.data.predictions.map(prediction => prediction.description); // 
        } else {
            throw new Error(`API returned status: ${response.data.status}`);
        }
    } catch (err) {
        console.error('Error getting auto suggestions:', err.response?.data || err.message);
        throw err;
    }
};

module.exports.getCaptainsInTheRadius = async(ltd,lng,radius) => {
    const captains = await captainModel.find({
        location: {
            $geoWithin: {
                $centerSphere: [[ ltd,lng ], radius/ 6371]
            }
        }
    })
    return captains;
}