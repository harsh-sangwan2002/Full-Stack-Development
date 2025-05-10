const movieModel = require('../models/movie.model');

const AddMovie = async (req, res) => {

    try {

        const newMovie = await movieModel(req.body);
        await newMovie.save();
        res.send({
            success: true,
            message: "New movie has been added successfully"
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Couln't add movie in the database"
        })
    }
}

module.exports = { AddMovie }