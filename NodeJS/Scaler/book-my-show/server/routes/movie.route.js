const movieRouter = require('express').Router();
const { AddMovie } = require('../controllers/movie.controller');

movieRouter.post('/add-movie', AddMovie);

module.exports = movieRouter;