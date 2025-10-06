const express = require('express');
const userModel = require('../models/userModel');
const userRouter = express.Router();

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

function setCookies(req, res) {

    // httpOnly -> cookie is only accessible to backend now.
    res.cookie("username", "john doe", { maxAge: 1000 * 60 * 60 * 24, httpOnly: true, secure: true });
    res.cookie("isAuthenticated", true);
    res.send("Cookies are set");
}

function getCookies(req, res) {
    const cookies = req.cookies;
    console.log(cookies);
    res.send("Cookies are retrieved");
}

userRouter.route('/')
    .get(findUsers)
    .post(createUser)
    .patch(updateUser)
    .delete(deleteUser);

userRouter.route('/:id')
    .get(getUserById);

userRouter.route('/setCookies')
    .get(setCookies);

userRouter.route('/getCookies')
    .get(getCookies);

module.exports = userRouter;