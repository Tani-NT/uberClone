const mongoose = require('mongoose');

function connectToDB() {
    mongoose.connect(process.env.DB_CONNECT).then(() => {
        console.log('connected!')
    }).catch(err => console.error(err))
}

module.exports = connectToDB;