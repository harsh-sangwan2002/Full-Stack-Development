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

const GetAllMovies = async (req, res) => {
    try {

        const movies = await movieModel.find();
        res.send({
            success: true,
            movies
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Couln't get movies from the database"
        })
    }
}

const UpdateMovie = async (req, res) => {
    try {
        const body = req.body;
        const movieId = body.id;
        const movie = await movieModel.findById(movieId);

        Object.keys(body).forEach((key) => {
            if (key !== "id") movie[key] = body[key];
        });
        await movie.save();
        res.send({
            success: true,
            message: "Movie has been updated successfully",
            data: movie,
        });
    } catch (err) {
        res.send({
            success: false,
            message: err.message,
        });
    }
};

const DeleteMovie = async (req, res) => {
    try {
        const movieId = req.body.id;
        console.log(req.body);
        await movieModel.findByIdAndDelete(movieId);
        res.send({
            success: true,
            message: "Movie has been deleted successfully",
        });
    } catch (err) {
        res.send({
            success: false,
            message: err.message,
        });
    }
}

module.exports = { AddMovie, GetAllMovies, UpdateMovie, DeleteMovie }