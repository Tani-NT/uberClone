const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const captainSchema = new mongoose.Schema({
    fullName: {
        firstName: {
            type: String,
            required: true,
            min: [3, 'First name must be 3 characters or long!']
        },
        lastName: {
            type: String,
            min: [3, 'Last name must be 3 characters or long!']
        }
    },
    email: {
        type: String,
        unique: true,
        required: true,
        min: [5, 'Email must be 5 characters or long!']
    },
    password: {
        type: String,
        required: true,
        select:false
    },
    socketId: {
        type: String
    },
    status:{
        type: String,
        enum: ['active', 'inactive'],
        default: 'inactive'
    },
    vehicle:{
        color: {
            type: String,
            required: true,
            min: [3, 'Color must be 3 characters or long!']
        },
        plate:{
            type: String,
            required: true,
            min: [3, 'Plate must be 3 characters long!']
        },
        capacity: {
            type: Number,
            required: true,
            min: [1, "Capacity must be 1!"]
        },
        vehicleType: {
            type: String,
            required: true,
            enum: ['car', 'moto', 'auto']
        }
    },
    location: {
        ltd:{
            type: Number
        },
        lng:{
            type: Number
        }
    }
})

captainSchema.methods.generateAuthToken = function(){
    const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET,{ expiresIn:'24h' });
    return token;
}
captainSchema.methods.comparePassword = async function(password){
    return await bcrypt.compare(password, this.password)
}

captainSchema.statics.hashPassword = async function(password){
    return await bcrypt.hash(password,10)
}

module.exports = mongoose.model('captain', captainSchema);