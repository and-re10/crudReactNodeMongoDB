// DATABASE 
const mongoose = require('mongoose');
require('dotenv/config');

mongoose.connect(process.env.DB_CONNECTION, { 
    useUnifiedTopology: true,
    useNewUrlParser: true
} , async () => {
    try {
        console.log("Connected to DB");
    } catch (error) {
        console.error(error);
    }
})


// Server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

// Middlewares
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

const movieRoute = require('./routes/movies');
app.use("/api/", movieRoute);


// Porte du Server Back-end
app.listen(3004, () => console.log('Running on port 3004'));
