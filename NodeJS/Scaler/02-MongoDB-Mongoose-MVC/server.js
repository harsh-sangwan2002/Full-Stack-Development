const express = require('express');
const app = express();

app.use(express.json());

const data = {
    name: "Harsh",
    age: 22
}

app.get('/', (req, res) => {
    // res.send('<h1>Hello World</h1>');
    res.send(data);
})

app.post('/', (req, res) => {
    res.send("Post request success");
})

app.post('/submit', (req, res) => {
    const formData = req.body;
    console.log(formData);
    res.send(formData);
})

app.put('/', (req, res) => {
    res.send("Put request success")
})

app.delete('/', (req, res) => {
    res.send("Delete request success")
})

app.get('/search/:id', (req, res) => {
    const id = req.params.id;
    res.send(id);
})

// Only the above api will work not this one
// app.post('/submit', (req, res) => {
//     const formData = req.body;
//     console.log(formData);
//     res.send("2: ", formData);
// })

app.use((req, res) => {
    res.send("404 Error");
})

app.listen(3000, () => {
    console.log("Backend server is running on port 3000.");
})