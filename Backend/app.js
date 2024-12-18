const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors')
const userRoute = require('./routes/userRoute');
const captainRoute = require('./routes/captainRoute');
const mapRoute = require('./routes/mapRoute');
const rideRoute = require('./routes/rideRoute');
const connectToDB = require('./db/db');
connectToDB()
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser());

app.get('/', (req,res) => {
    res.send('hello world!')
})

app.use('/users', userRoute);
app.use('/captains',captainRoute);
app.use('/maps',mapRoute);
app.use('/rides',rideRoute);

module.exports = app