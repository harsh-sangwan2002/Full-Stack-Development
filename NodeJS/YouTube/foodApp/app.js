const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

const app = express();

app.use(express.json());
app.use(cookieParser());
dotenv.config();

const userRouter = require('./routes/user.route');
const authRouter = require('./routes/auth.route');

app.use('/user', userRouter);
app.use('/auth', authRouter);

(async function connect() {
    try {
        await mongoose.connect(process.env.DB_LINK);
        console.log("MongoDB is connected");
    } catch (err) {
        console.log(err);
    }
})()

app.listen(3000, (req, res) => {
    console.log("Server is running on port 3000");
})