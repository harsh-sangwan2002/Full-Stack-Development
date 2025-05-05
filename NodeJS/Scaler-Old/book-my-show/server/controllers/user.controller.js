const userModel = require('../models/user.model');
const jwt = require('jsonwebtoken');

const registerUser = async (req, res) => {
    const { name, email, password, role } = req.body;

    try {

        const userExists = await userModel.findOne({ email });

        if (userExists) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const user = new userModel({
            name,
            email,
            password,
            role
        });
        await user.save();

        res.status(201).json({ message: 'User registered successfully', user });
    } catch (error) {
        res.status(500).json({ message: 'Error registering user', error });
    }
}

const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }
        if (user.password !== password) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
        res.cookie('token', token);
        res.status(200).json({ message: 'Login successful', user, token });
    }
    catch (error) {
        res.status(500).json({ message: 'Error logging in', error });
    }
}

const getCurrentUser = async (req, res) => {
    try {
        let userId = req.user;
        console.log("userId", userId);
        const user = await userModel.findById(userId).select("-password");
        return res.status(200).json({
            message: "User fetched successfully",
            success: true,
            data: user
        });
    } catch (error) {
        res.status(500).json({ message: 'Error getting current user', error });
    }
}


module.exports = {
    registerUser,
    loginUser,
    getCurrentUser
}