const mongoose = require('mongoose');
const url = "mongodb+srv://hsangwan2002:Samay%40229@cluster0.49hcb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const connectDB = async () => {

    try {

        await mongoose.connect(url);
        console.log("Connected to MongoDB");

    } catch (err) {
        console.log(err);
    }
}

module.exports = connectDB;