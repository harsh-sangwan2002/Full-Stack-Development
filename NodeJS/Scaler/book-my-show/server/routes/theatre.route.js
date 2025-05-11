const theatreRouter = require('express').Router();
const { AddTheatre, UpdateTheatre, DeleteTheatre, GetAllTheatres, GetTheatreByOwner } = require('../controllers/theatre.controller');

theatreRouter.get('/', GetAllTheatres)
    .post('/get-all-theatre-by-owner', GetTheatreByOwner)
    .post('/add', AddTheatre)
    .put('/update', UpdateTheatre)
    .put('/delete', DeleteTheatre);

module.exports = theatreRouter;