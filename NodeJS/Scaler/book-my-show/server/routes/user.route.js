const userRouter = require('express').Router();
const { LoginUser, RegisterUser, GetCurrentUser } = require('../controllers/user.controller');
const authMiddleware = require('../middlewares/auth.middleware');
const userModel = require('../models/user.model');

userRouter.post('/register', RegisterUser)
    .post('/login', LoginUser)
    .get('/get-current-user', authMiddleware, async (req, res) => {

        try {

            console.log("Hello ")
            // const userId = req.body.userId;
            // const user = await userModel.findById(userId);
            // console.log(user);
            // res.status(200).json({
            //     message: "Fetched the user successfully",
            //     user
            // })
        } catch (err) {
            res.status(500).json({
                message: "Error while fetching the user"
            })
        }
    });

module.exports = userRouter;