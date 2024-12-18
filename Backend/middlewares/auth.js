const blackListTokenModel = require('../models/blacklistToken');
const userModel = require('../models/userModel');
const captainModel = require('../models/captainModel');
const brcypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports.authUser = async (req,res,next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
    if(!token){
        return res.status(401).json({ message: 'Unauthorized!' });
    }

    const isBlackListToken = await blackListTokenModel.findOne({ token: token });
    if(isBlackListToken){
        return res.status(401).json({ message: 'Unauthorized!' });
    }

    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await userModel.findById(decoded._id);
        req.user = user;
        return next();
    } catch(err){
        return res.status(401).json({ message: 'Not authorized!' });
    }
}

module.exports.authCaptain = async(req,res,next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[ 1 ];
    if(!token){
        return res.status(401).json({ message: 'Unauthorized!' });
    }

    const isBlackListToken = await blackListTokenModel.findOne({ token: token });
    if(isBlackListToken){
        return res.status(401).json({ message: 'Unauthorized!' });
    }

    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const captain = await captainModel.findById(decoded._id);
        req.captain = captain;
        return next();
    } catch(err){
        return res.status(401).json({ message: 'Unauthorized!' });
    }
}