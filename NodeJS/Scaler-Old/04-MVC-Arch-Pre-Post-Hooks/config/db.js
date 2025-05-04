const mongoose = require('mongoose');

const Mongo_URL = "mongodb+srv://hsangwan2002:Samay%40229@cluster0.49hcb.mongodb.net/"

// Connect to DB
const connectDB = async () => {
    try {

        await mongoose.connect(Mongo_URL);
        console.log("Connected to MongoDB.");
    } catch (error) {

    }
}

module.exports = connectDB;