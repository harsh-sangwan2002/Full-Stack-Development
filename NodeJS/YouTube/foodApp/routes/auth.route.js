const express = require('express');
const userModel = require('../models/userModel');
const bcrypt = require('bcrypt');
const authRouter = express.Router();

const middleware1 = (req, res, next) => {
    console.log("middleware1 is called");
    next();
}

const middleware2 = (req, res, next) => {
    console.log("middleware2 is called");
    next();
}

const getSignUp = (req, res) => {
    res.send("Sign Up Page");
}

const postSignUp = async (req, res) => {
    let data = req.body;
    let user = await userModel.create(data);

    res.json({
        message: "User created successfully",
        user: user
    })
}

const loginUser = async (req, res) => {

    try {
        const { email, password } = req.body;
        let user = await userModel.findOne({ email });

        if (user) {

            const isPasswordCorrect = await bcrypt.compare(password, user.password);

            if (isPasswordCorrect) {
                res.json({
                    message: "User logged in successfully",
                    user: user
                })
            }

            else {
                res.json({
                    message: "Invalid credentials!"
                })
            }
        }

        else {
            res.json({
                message: "User not found"
            })
        }
    } catch (error) {
        res.json({
            message: "Internal server error"
        })
    }
}

authRouter.route('/signup')
    .get(middleware1, getSignUp, middleware2)
    .post(postSignUp)

authRouter.route('/login')
    .post(loginUser)

module.exports = authRouter;