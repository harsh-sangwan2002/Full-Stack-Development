const express = require('express');
const mongoose = require('mongoose');

const Mongo_URL = "mongodb+srv://harsh:samay229@cluster0.oymn2pz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const app = express();

app.use(express.json());

mongoose.connect(Mongo_URL).then(connection => {
    console.log("Connected to MongoDB.");
}).catch(err => {
    console.log(err);
})

app.listen(8080, () => {
    console.log(`Backend server is running on port 8080.`)
})