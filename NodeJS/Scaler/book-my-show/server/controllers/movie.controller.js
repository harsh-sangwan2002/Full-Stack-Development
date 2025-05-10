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
        const { id } = req.params;
        const updatedMovie = await movieModel.findByIdAndUpdate(id, req.body);
        res.send({
            success: true,
            message: "Movie has been updated successfully",
            updatedMovie
        })
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "Couln't update movie in the database"
        })
    }
}
const DeleteMovie = async (req, res) => {
    try {
        const { id } = req.params;
        await movieModel.findByIdAndDelete(id);
        res.send({
            success: true,
            message: "Movie has been deleted successfully"
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Couln't delete movie from the database"
        })
    }
}

module.exports = { AddMovie, GetAllMovies, UpdateMovie, DeleteMovie }