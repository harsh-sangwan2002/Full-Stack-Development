const express = require('express');
const {registerUser,loginUser} = require('../controllers/user.controller');

const userRouter = express.Router();

userRouter.post('/',registerUser);
userRouter.post('/',loginUser);