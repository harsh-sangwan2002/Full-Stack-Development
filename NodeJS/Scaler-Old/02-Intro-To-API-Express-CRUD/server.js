const express = require('express');
const app = express();

app.use(express.json());

const myLogger = (req, res, next) => {
    console.log("Logged");
    next();
}

app.get('/', (req, res) => {
    const jsonRes = {
        message: "Hello! You have accessed the root endpoint.",
        timestamp: Date.now()
    }
    res.send(jsonRes);
})

app.get('/search/:id', (req, res) => {
    const id = req.params.id;
    console.log("ID: ", id);
    res.send(id);
})

app.post('/', (req, res) => {
    res.send("Post request successful");
})

app.post('/submit', (req, res) => {
    const formData = req.body;
    console.log("Form Data: ", formData);
    res.send("Form submitted successfully");
})

app.put('/update', (req, res) => {
    const updateData = req.body;
    console.log("Update Data: ", updateData);
    res.send("Data updated successfully");
})

app.delete('/delete', (req, res) => {
    const deleteData = req.body;
    console.log("Delete Data: ", deleteData);
    res.send("Data deleted successfully");
})

app.use((req, res) => {
    res.status(404).send("404 Not Found");
})

app.listen(3000, () => {
    console.log("Backend server is running at port 3000.");
})