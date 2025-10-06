const express = require('express');
const {createUser,getUsers} = require('../controllers/user.controller');

const userRouter = express.Router();

userRouter.get('/',getUsers);
userRouter.post('/',createUser);

module.exports = userRouter;