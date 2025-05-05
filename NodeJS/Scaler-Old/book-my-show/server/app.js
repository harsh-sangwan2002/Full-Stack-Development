const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cookieParser());

const connectToDB = require('./config/db');
const userRouter = require('./routes/user.route');



app.use(cors({
    origin: 'http://localhost:5173', // frontend origin
    credentials: true
}));


app.use('/api/users', userRouter);


const PORT = process.env.PORT || 5000;
app.listen(PORT || 5000, async () => {
    console.log(`Server is running on port ${PORT}`);
    await connectToDB();
})