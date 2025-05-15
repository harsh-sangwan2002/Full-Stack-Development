const userRouter = require('express').Router();
const { LoginUser, RegisterUser, GetCurrentUser } = require('../controllers/user.controller');
const authMiddleware = require('../middlewares/auth.middleware');
const userModel = require('../models/user.model');

userRouter.post('/register', RegisterUser)
    .post('/login', LoginUser)
    .get('/get-current-user', authMiddleware, GetCurrentUser);

module.exports = userRouter;