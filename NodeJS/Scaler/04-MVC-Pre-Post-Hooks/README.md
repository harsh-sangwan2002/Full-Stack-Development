# 🧱 Node.js MVC Architecture Example

A well-structured Node.js backend project implementing the **MVC (Model-View-Controller)** design pattern using **Express** and **MongoDB (via Mongoose)**. This project demonstrates the clean separation of concerns, improving scalability, maintainability, and readability of your code.

---

## 🧭 Table of Contents

- [📖 Introduction](#-introduction)
- [📁 Folder Structure](#-folder-structure)
- [🚀 Getting Started](#-getting-started)
- [🧩 MVC Explained](#-mvc-explained)
- [🔧 Technologies Used](#-technologies-used)
- [📌 Example Endpoints](#-example-endpoints)
- [✅ Features](#-features)
- [📬 License](#-license)

---

## 📖 Introduction

**MVC (Model-View-Controller)** is a design pattern that separates an application into three main components:

- 🗃️ **Model** – Handles data and business logic.
- 🎮 **Controller** – Handles user input and controls interactions between Model and View.
- 👁️ **View** – (Not implemented yet) Displays data to users; often frontend UI.

> This project is focused on backend development, so the **View layer is omitted** for now.

---

## 📁 Folder Structure

```

project-root/
│
├── app.js # Main application file
├── config/
│ └── db.js # Database connection setup
├── controllers/
│ └── productController.js# Request handling logic
├── models/
│ └── productModel.js # Mongoose schema/model
├── routes/
│ └── productRoutes.js # API endpoint definitions
└── package.json

```

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/mvc-nodejs-app.git
cd mvc-nodejs-app
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file and add your MongoDB connection string:

```env
MONGODB_URI=mongodb://localhost:27017/mydatabase
PORT=8006
```

### 4. Run the Server

```bash
npm start
```

Server will be running on: `http://localhost:8006`

---

## 🧩 MVC Explained

### 📦 Model – `productModel.js`

Handles all data logic using Mongoose:

```js
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  product_name: { type: String, required: true },
  product_price: { type: Number, required: true },
  isInStock: { type: Boolean, default: true },
  category: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Product", productSchema);
```

---

### 🎮 Controller – `productController.js`

Contains logic for handling requests:

```js
exports.getAllProducts = async (req, res) => {
  const products = await Product.find({});
  res.status(200).json(products);
};
```

Other controller functions:

- `getProductById`
- `createProduct`
- `updateProduct`
- `deleteProduct`

---

### 🌐 Routes – `productRoutes.js`

Defines API endpoints and maps them to controller functions:

```js
router.get("/products", getAllProducts);
router.get("/products/:id", getProductById);
router.post("/products", createProduct);
router.put("/products/:id", updateProduct);
router.delete("/products/:id", deleteProduct);
```

---

## 🔧 Technologies Used

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [dotenv](https://www.npmjs.com/package/dotenv)

---

## 📌 Example Endpoints

| Method | Endpoint            | Description          |
| ------ | ------------------- | -------------------- |
| GET    | `/api/products`     | Get all products     |
| GET    | `/api/products/:id` | Get product by ID    |
| POST   | `/api/products`     | Create new product   |
| PUT    | `/api/products/:id` | Update product by ID |
| DELETE | `/api/products/:id` | Delete product by ID |

---

## ✅ Features

- Clean MVC structure
- MongoDB integration using Mongoose
- RESTful API routes
- Centralized error handling
- Scalable folder structure
- Ready for frontend integration

---

## 📬 License

This project is licensed under the [MIT License](LICENSE).

---

## 🙌 Contributing

Feel free to fork and contribute. PRs are welcome!
