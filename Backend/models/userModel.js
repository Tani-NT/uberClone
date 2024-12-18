const mongoose = require('mongoose')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
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
    }
})

userSchema.methods.generateAuthToken = function(){
    const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET,{ expiresIn:'24h' });
    return token;
}
userSchema.methods.comparePassword = async function(password){
    return await bcrypt.compare(password, this.password)
}

userSchema.statics.hashPassword = async function(password){
    return await bcrypt.hash(password,10)
}

module.exports = mongoose.model('user', userSchema)