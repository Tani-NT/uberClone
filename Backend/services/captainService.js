const captainModel = require('../models/captainModel');

module.exports.createCaptain = async({
    firstName, lastName, email, password, color, vehicleType, capacity, plate 
}) => {
    if(!firstName || !lastName || !email || !password || !color || !vehicleType || !capacity ||!plate){
        throw new Error('All fields are required!')
    }
    const captain = captainModel.create({
        fullName: {
            firstName,
            lastName
        },
        email,
        password,
        vehicle: {
            color,
            plate,
            capacity,
            vehicleType,
        }
    })
    return captain;
}