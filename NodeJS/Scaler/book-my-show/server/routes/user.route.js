const userRouter = require('express').Router();
const { loginUser, registerUser } = require('../controllers/user.controller');
const {authMiddleware} = require('../middlewares/auth.middleware');

userRouter.post('/register', authMiddleware, registerUser);
userRouter.post('/login', loginUser);

module.exports = userRouter;