const express = require('express');
require('dotenv').config();

const connectToDB = require('./config/db');
const userRouter = require('./routes/user.route');

const app = express();
app.use(express.json());

app.use('/api/users', userRouter);


const PORT = process.env.PORT || 5000;
app.listen(PORT || 5000, async () => {
    console.log(`Server is running on port ${PORT}`);
    await connectToDB();
})