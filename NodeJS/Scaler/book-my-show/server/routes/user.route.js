const userRouter = require('express').Router();
const { LoginUser, RegisterUser } = require('../controllers/user.controller');

userRouter.post('/register', RegisterUser)
    .post('/login', LoginUser);

module.exports = userRouter;