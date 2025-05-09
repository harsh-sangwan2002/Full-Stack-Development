const userModel = require('../models/user.model');

const RegisterUser = async (req, res) => {

    try {

        const { name, email, password } = req.body;
        const doesUserExists = await userModel.findOne({ email });

        if (doesUserExists)
            res.status(500).send("User already exists");

        const user = await userModel.create({ name, email, password });

        res.status(200).json({
            message: "User created successfully",
            user
        })

    } catch (err) {
        res.status(500).json("Error while registering: ", err);
    }
}

const LoginUser = async (req, res) => {

    try {

        const { email, password } = req.body;
        const user = await userModel.findOne({ email });

        if (!user || password !== user.password)
            res.status(500).json({
                message: "Wrong credentials"
            })

        else
            res.status(200).json({
                message: "Logged in successfully",
                user
            })

    } catch (err) {
        res.status(500).json("Error while registering: ", err);
    }
}

module.exports = { LoginUser, RegisterUser }