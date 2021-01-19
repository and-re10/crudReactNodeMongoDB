// DATABASE 
const mongoose = require('mongoose');
require('dotenv/config');

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true} ,() => {
    try {
        console.log('Connected to DB');
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



// Porte du Server Back-end
app.listen(3333, () => console.log('Running on port 3333'));