const userModel = require('../models/user.model');

const registerUser = async (req, res) => {
    const { name, email, password, role } = req.body;

    try {
        const user = await userModel.create({ name, email, password, role });
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
        res.status(200).json({ message: 'Login successful', user });
    }
    catch (error) {
        res.status(500).json({ message: 'Error logging in', error });
    }
}

module.exports = {
    registerUser,
    loginUser
}