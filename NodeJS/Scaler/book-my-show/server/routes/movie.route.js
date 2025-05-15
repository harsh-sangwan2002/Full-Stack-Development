const movieRouter = require('express').Router();
const { AddMovie, GetAllMovies, DeleteMovie, UpdateMovie } = require('../controllers/movie.controller');

movieRouter.get('/', GetAllMovies)
    .post('/add-movie', AddMovie)
    .put('/', UpdateMovie)
    .put('/delete', DeleteMovie)

module.exports = movieRouter;