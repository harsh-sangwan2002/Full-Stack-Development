const mongoose = require('mongoose');

const Mongo_URL = "mongodb://hsangwan2002:samay229@cluster0-shard-00-00.49hcb.mongodb.net:27017,cluster0-shard-00-01.49hcb.mongodb.net:27017,cluster0-shard-00-02.49hcb.mongodb.net:27017/?ssl=true&replicaSet=atlas-xdd8ls-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0"

// Connect to DB
const connectDB = async()=>{
    try {
        
        await mongoose.connect(Mongo_URL);
        console.log("Connected to MongoDB."); 
    } catch (error) {
        
    }
} 

module.exports = connectDB;