const mongoose = require('mongoose');

const DB_URL = process.env.DB_URL;

async function connectToDB(){
    try {
        
        await mongoose.connect(DB_URL);
        console.log("Connected to MongoDB.");
    } catch (err) {
        console.log("Error is: ",err);
    }
}

module.exports = connectToDB;