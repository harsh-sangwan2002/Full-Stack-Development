const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());

const connectToDB = require('./config/db');
const userRouter = require('./routes/user.route');
const movieRouter = require('./routes/movie.route');

app.use('/api/users', userRouter);
app.use('/api/movies', movieRouter);

app.listen(3000, async () => {
    console.log("Backend server is running on 3000.");
    await connectToDB();
})