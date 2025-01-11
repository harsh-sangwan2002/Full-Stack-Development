const express = require('express');
const app = express();


app.use(express.json());

// mini app
const userRouter = express.Router();
const authRouter = express.Router();

app.use('/user', userRouter);
app.use('/auth', authRouter);

const getSignUp = (req, res) => {
    res.sendFile('/public/index.html', { root: __dirname });
}

const postSignUp = (req, res) => {
    const body = req.body;
    res.json({
        message: "Data recieved successfully",
        body: body
    })
    console.log(body);
}

const getUser = (req, res) => {
    res.send(users);
}

const postUser = (req, res) => {
    console.log(req.body);
    users = req.body.name;
    res.json({
        message: "Data received successfully.",
        user: req.body
    })
}

const updateUser = (req, res) => {
    console.log(req.body);

    const datatoBeUpdated = req.body;
    for (let key in datatoBeUpdated) {
        users[key] = datatoBeUpdated[key];
    }

    res.json({
        message: "Data updated successfully.",
        user: req.body
    })
}

const deleteUser = (req, res) => {
    users = {};
    res.json({
        message: "Data deleted successfully.",
        user: users
    })
}

const getUserById = (req, res) => {
    res.send(req.params.id);
}

app.get('/user', (req, res) => {
    console.log(req.query);
    res.send(req.query);
})

userRouter.route('/')
    .get(getUser)
    .post(postUser)
    .patch(updateUser)
    .delete(deleteUser);

userRouter.route('/:id')
    .get();

authRouter.route('/signup')
    .get(getSignUp)
    .post(postSignUp);

app.listen(3000, (req, res) => {
    console.log("Server is running on port 3000");
})