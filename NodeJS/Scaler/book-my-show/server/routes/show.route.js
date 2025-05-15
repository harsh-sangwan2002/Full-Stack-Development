const showRouter = require('express').Router();
const { GetAllShowByTheatre, GetShowById, AddShow, UpdateShow, DeleteShow } = require('../controllers/show.controller');

showRouter.post('/add', AddShow)
    .post('/get-all-shows-by-theatre', GetAllShowByTheatre)
    .put('/update', UpdateShow)
    .put('/delete', DeleteShow)
    .post('/get-all-theatres-by-movie', (req, res) => { })
    .post('/get-show-by-id', GetShowById);

module.exports = showRouter;