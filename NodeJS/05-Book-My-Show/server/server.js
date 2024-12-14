const express = require('express');
const dotenv = require('dotenv');
const { loginUser, registerUser } = require('./controllers/user.controller');

dotenv.config();
const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;

const connectToDB = require('./config/dbConfig');
connectToDB();

app.use('/api/login', loginUser);
app.use('/api/register', registerUser);

const server = app.listen(PORT, () => {
    console.log("Backend server is running.");
})
console.log(server);