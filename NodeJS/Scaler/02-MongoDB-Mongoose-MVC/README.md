# 🧑‍💻 Software Engineering Notes: Node.js, HTTP Server, Middleware & MongoDB

---

## 🌐 Creating a Server Using Node.js `http` Module

### 🔧 What is the HTTP Module?

The built-in `http` module in Node.js allows creation of a **basic HTTP server** that handles incoming requests and sends responses.

### 🛠️ Steps to Create a Server:

```js
const http = require("http");

const server = http.createServer((req, res) => {
  res.write("Hello, World!");
  res.end(); // Signals the end of the response
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
```

---

## 🔄 Handling Different Types of HTTP Requests

- **GET**: Retrieve data from the server (e.g., accessing a webpage)
- **POST**: Send data to the server (e.g., form submission)
- **PUT**: Update existing data on the server
- **DELETE**: Remove data from the server

---

## ⚙️ Express.js – Simplified Server Creation

### 📦 What is Express?

**Express.js** is a fast, minimal, and flexible Node.js web application framework that simplifies building web servers and APIs.

### 📥 Installation:

```bash
npm install express
```

### 🚀 Setting Up a Basic Express Server:

```js
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to Express!");
});

app.listen(3000, () => {
  console.log("Express server running on port 3000");
});
```

---

## 🔁 Middleware in Express.js

### 📘 What is Middleware?

Middleware are functions that have access to the **request**, **response**, and the **next()** function in the application's request-response cycle.

### 🔧 Common Use Cases:

- Parsing request data (`express.json()`)
- Authentication and authorization
- Logging and error handling
- Modifying request/response objects

### 🧪 Example:

```js
app.use(express.json()); // Parses JSON requests

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next(); // Passes control to the next middleware
});
```

---

## 🗄️ Introduction to MongoDB & Mongoose

### 🧰 What is MongoDB?

MongoDB is a **NoSQL document-based** database that stores data in **JSON-like documents** inside collections.

### 🧩 What is Mongoose?

Mongoose is an **ODM (Object Data Modeling)** library that provides a schema-based solution to model your MongoDB data.

### 📥 Installation:

```bash
npm install mongoose
```

### 🔗 Connecting to MongoDB:

```js
const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://<user>:<password>@cluster.mongodb.net/myDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
```

### 📐 Defining Schema & Model:

```js
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
});

const User = mongoose.model("User", userSchema);
```

### 💡 Performing CRUD:

```js
const newUser = new User({ name: "John", email: "john@example.com" });
await newUser.save();
```

---

## 📦 Node Modules & NPM

### 📂 Managing Dependencies:

- `dependencies`: Required for the app to run.
- `devDependencies`: Used only during development (e.g., testing tools).

### ⚠️ Ignore Unnecessary Files:

Use a `.gitignore` file to exclude:

```
node_modules/
.env
```

---

## ✅ Summary

| Concept       | Summary                                  |
| ------------- | ---------------------------------------- |
| `http` module | Create basic HTTP servers in Node.js     |
| Express.js    | Framework for routing and middleware     |
| Middleware    | Functions to handle requests/responses   |
| MongoDB       | NoSQL database using JSON-like documents |
| Mongoose      | ODM for MongoDB in Node.js               |
| NPM           | Dependency manager for Node.js projects  |
