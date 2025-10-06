const userModel = require('../models/user.model');

const createUser = async function (req, res) {

    const { name, email } = req.body;
    try {

        const user = await userModel.create({ name, email });
        return res.status(201).json({ user });

    } catch (err) {
        return res.status(404).json({ message: err.message });
    }
}

const getUsers = async function (req, res) {

    try {

        const users = await userModel.find();
        return res.status(200).json({ users });
    } catch (err) {
        return res.status(404).json({ message: err.message });
    }
}

module.exports = { createUser, getUsers };