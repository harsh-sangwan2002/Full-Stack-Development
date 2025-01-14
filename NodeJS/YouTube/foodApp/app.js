const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

const app = express();
const userModel = require('./models/userModel');

app.use(express.json());
app.use(cookieParser());
dotenv.config();
// mini app
const userRouter = express.Router();
const authRouter = express.Router();

app.use('/user', userRouter);
app.use('/auth', authRouter);

const middleware1 = (req, res, next) => {
    console.log("middleware1 is called");
    next();
}

const middleware2 = (req, res, next) => {
    console.log("middleware2 is called");
    next();
}

const findUsers = async (req, res) => {
    const body = await userModel.find();
    res.json({
        message: "Users retrieved successfully",
        body: body
    })
}

const createUser = async (req, res) => {
    try {
        const user = req.body;
        const result = await userModel.create(user);
        res.json({
            message: "User created successfully",
            result: result
        })
    } catch (err) {
        console.log(err);
    }
}

const updateUser = async (req, res) => {

    const user = req.body;
    const updatedUser = await userModel.findOneAndUpdate({ email: user.email }, user);

    res.json({
        message: "Data updated successfully.",
        user: updatedUser
    })
}

const getUser = (req, res) => {
    res.send(users);
}

const postUser = (req, res) => {
    console.log(req.body);
    users = req.body.name;
    res.json({
        message: "Data updated successfully.",
        user: req.body
    })
}

const deleteUser = async (req, res) => {

    const user = req.body;
    const deletedUser = await userModel.findOneAndDelete({ email: user.email });
    res.json({
        message: "User deleted successfully.",
        user: deletedUser
    })
}

const getUserById = (req, res) => {
    res.send(req.params.id);
}

app.get('/user', (req, res) => {
    console.log(req.query);
    res.send(req.query);
})

userRouter.route('/')
    .get(getUser)
    .post(postUser)
    .patch(updateUser)
    .delete(deleteUser);

userRouter.route('/:id')
    .get();

userRouter.route('/setCookies')
    .get(setCookies);

userRouter.route('/getCookies')
    .get(getCookies);

function setCookies(req, res) {
    res.cookie("username", "john doe", { maxAge: 1000 * 60 * 60 * 24, httpOnly: true, secure: true });
    res.cookie("isAuthenticated", true);
    res.send("Cookies are set");
}

function getCookies(req, res) {
    const cookies = req.cookies;
    console.log(cookies);
    res.send("Cookies are retrieved");
}

authRouter.route('/signup')
    .get(findUsers)
    .post(createUser)
    .patch(updateUser)
    .delete(deleteUser);

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