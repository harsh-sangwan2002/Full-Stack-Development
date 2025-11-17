const express = require('express');
const path = require('path');
const MongoClient = require('mongodb').MongoClient;

const app = express();
const PORT = 5050;
app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

const mongoUrl = 'mongodb://admin:qwerty@localhost:27017';
const client = new MongoClient(mongoUrl);

// Get all users
app.get('/api/users', async (req, res) => {
    try {
        await client.connect();
        console.log('Connected to MongoDB');

        const db = client.db('mydatabase');
        const users = await db.collection('users').find({}).toArray();
        res.json(users);
    } catch (err) {
        res.status(500).send(err.message);
    } finally {
        await client.close();
    }
});

// Add a new user
app.post('/api/users', async (req, res) => {
    try {
        await client.connect();
        console.log('Connected to MongoDB');

        const db = client.db('mydatabase');
        const newUser = req.body;
        const result = await db.collection('users').insertOne(newUser);
        res.status(201).json(result.ops[0]);
    } catch (err) {
        res.status(500).send(err.message);
    } finally {
        await client.close();
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});