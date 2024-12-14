const userModel = require('../models/user.model');

const registerUser = async (req, res) => {

    const { email, password } = req.body;
    try {

        const user = await userModel.create({ email, password });
        res.status(200).json({ message: "User registered successfully." });

    } catch (err) {
        res.status(404).json({ message: "User registration failed." });
    }
}

const loginUser = async (req, res) => {

    const { email, password } = req.body;
    try {

        const user = await userModel.findOne({ email });

        // if(password!==user.password)
        //     res.status(404).json({message:"Wrong credentials."});

        // else 
        //     res.status(200).json({message:"Login successful."});

        res.status(200).json(user);

    } catch (err) {
        res.status(404).json({ message: "Login failed." });
    }
}

module.exports = { registerUser, loginUser };