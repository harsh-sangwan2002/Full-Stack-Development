const movieRouter = require('express').Router();
const { AddMovie, GetAllMovies, DeleteMovie, UpdateMovie } = require('../controllers/movie.controller');

movieRouter.get('/', GetAllMovies)
    .post('/add-movie', AddMovie)
    .put('/:id', UpdateMovie)
    .delete('/:id', DeleteMovie)

module.exports = movieRouter;