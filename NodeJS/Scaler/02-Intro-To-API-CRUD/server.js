const express = require('express');
const app = express();

// Create an express app
// Make express to understand and work with json data in request
// app.use() -> for all kind of requests
app.use(express.json()) // middleware

const loggerMiddleWare = (req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`)
    next();
}

//https://localhost:3000/search?name="Rajneesh"
app.get('/search',(req,res)=>{

    let params = req.query;
    console.log(params);
    res.send(`Your parameters are ${params.name}`);
})

// It will work for all type of requests
app.use(loggerMiddleWare);

app.get('/special',loggerMiddleWare,(req,res)=>{
    res.send("This is a special middleware.");
})

app.get('/', (req, res) => {
    res.send('Hello Express!');
})

app.get('/about', (req, res) => {
    res.send('This is about page.');
})

app.post('/data', (req, res) => {

    console.log(req.body);
    res.send("This is post request.");
})

const users = [
    { id: 1, name: "John" },
    { id: 2, name: "Jane" },
]

app.post('/users', (req, res) => {

    const newUser = req.body;

    // Operation
    const userId = users.length + 1;
    newUser.id = userId

    // Persist this information in DB
    users.push(newUser);

    // Send this statusCode
    res.status(200).json({
        message: "User updated successfully.",
        user: users
    });

    // console.log(users);  
})

const DBUsers = [];
app.post('/payment', (req, res) => {

    const paymentBody = req.body;
    const user = paymentBody.user;

    if (user.startsWith('r') || user.startsWith('R'))
        res.status(400).json({ messgae: "Invalid user" });

    else
        res.status(200).json({ message: "Valid user! Adding the user in db" })
})

app.delete('/users/:id', (req, res) => {

    const userId = parseInt(req.params.id);
    const idx = users.findIndex(user => user.id === userId);

    console.log(idx);
    console.log(userId);

    if (idx == -1)
        return res.status(404).json({ message: "User cannot be deleted." });

    users.splice(idx, 1);
    res.status(200).json({ message: "User deleted successfully", users });
})

app.use((req,res)=>{
    res.json({message:"404! Page not found."});
})

const port = 3000;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}.`);
})