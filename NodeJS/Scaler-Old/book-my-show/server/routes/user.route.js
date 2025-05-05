const userRouter = require('express').Router();
const { registerUser, loginUser, getCurrentUser } = require('../controllers/user.controller');
const authMiddleware = require('../middlewares/auth.middleware');

userRouter.post('/register', registerUser);
userRouter.post('/login', loginUser)
userRouter.get('/', getCurrentUser)

module.exports = userRouter;