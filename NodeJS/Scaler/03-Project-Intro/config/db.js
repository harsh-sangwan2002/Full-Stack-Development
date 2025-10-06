const mongoose = require('mongoose');
const url = process.env.MONGO_URL;

const connectDB = async () => {

    try {

        await mongoose.connect(url);
        console.log("Connected to MongoDB");

    } catch (err) {
        console.log(err);
    }
}

module.exports = connectDB;