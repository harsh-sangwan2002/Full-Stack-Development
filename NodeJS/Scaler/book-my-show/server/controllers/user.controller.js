const jwt = require('jsonwebtoken');
const UserModel = require('../models/user.model');

// Register user
const registerUser = async (req, res) => {

    const { name, email, password, role } = req.body;

    try {

        const findUser = await UserModel.findOne({ email });

        if (findUser)
            return res.status(400).json({
                message: "User already exists"
            })

        const user = await UserModel.create({ name, email, password, role });

        res.status(201).json({
            message: "User created successfully",
            user
        })
    } catch (err) {

        return res.status(500).json({
            message: "Internal server error",
            error: err.message
        })
    }
}

// Login user
const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {

        const user = await UserModel.findOne({ email });

        if (!user)
            return res.status(401).json({
                message: "Invalid credentials"
            })

        else {
            const isMatch = password === user.password;

            if (!isMatch)
                return res.status(401).json({
                    message: "Invalid credentials"
                })

            else {
                const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
                    expiresIn: '1d'
                });
                console.log(token);
                res.cookie("token", token, {
                    httpOnly: true,
                    sameSite: "strict"
                });
                return res.status(200).json({
                    message: "Login successful",
                    user
                })
            }
        }

    } catch (err) {

        return res.status(500).json({
            message: "Internal server error",
            error: err.message
        })
    }
}

module.exports = { registerUser, loginUser };