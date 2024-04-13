// config/config.js
require('dotenv').config(); // This line loads the .env file

// Importing the mongoose library for MongoDB database interaction
const mongoose = require("mongoose");

// Extracting the DATABASE_URI environment variable
const uri = process.env.DATABASE_URI;

// Function to establish connection with MongoDB database
const CONNECTDB = (url) => {
    // Attempting to connect to the MongoDB database using the provided URL
    mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            // Logging a success message if the connection is established
            console.log("Database is connected");
        })
        .catch((err) => {
            // Logging any errors encountered during the connection process
            console.log(err);
        });
};

// Now we call CONNECTDB and pass the uri
CONNECTDB(uri);

// Exporting the CONNECTDB function to make it accessible in other modules
module.exports = CONNECTDB;
