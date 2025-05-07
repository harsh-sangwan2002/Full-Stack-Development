# 📁 FS Module in Node.js – Revision Notes

## 🧠 Introduction

In this session, we explored the **File System (FS) module** in Node.js. This built-in module enables developers to interact with the file system to perform operations such as reading, writing, renaming, and deleting files or directories.

---

## 🎯 Objectives

- Understand the FS module and its significance.
- Perform asynchronous file operations.
- Handle errors gracefully.
- Execute CRUD operations on files.
- Create, rename, and delete directories.
- Use essential FS module methods effectively.
- Improve workflow using **Nodemon**.
- Utilize the **Path** module for cross-platform compatibility.

---

## 📦 FS Module: Overview

The `fs` module in Node.js enables:

- 📖 Reading files
- ✍️ Writing files
- 🔁 Renaming files
- 🗑️ Deleting files
- 📁 Creating directories
- ❌ Removing directories

---

## 🔑 Key Concepts

### 1. 📖 Reading Files Asynchronously

```js
const fs = require("fs");

fs.readFile("example.txt", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
  } else {
    console.log("File content:", data.toString());
  }
});
```
````

### 2. ✍️ Writing Files Asynchronously

```js
const content = "Hello, World!";
fs.writeFile("example2.txt", content, (err) => {
  if (err) {
    console.error("Error writing file:", err);
  } else {
    console.log("File written successfully");
  }
});
```

### 3. 🔁 Renaming Files

```js
fs.rename("example2.txt", "newfile.txt", (err) => {
  if (err) {
    console.error("Error renaming file:", err);
  } else {
    console.log("File renamed successfully");
  }
});
```

### 4. 🗑️ Deleting Files

```js
fs.unlink("newfile.txt", (err) => {
  if (err) {
    console.error("Error deleting file:", err);
  } else {
    console.log("File deleted successfully");
  }
});
```

### 5. 📁 Creating Directories

```js
fs.mkdir("myDirectory", (err) => {
  if (err) {
    console.error("Error creating directory:", err);
  } else {
    console.log("Directory created successfully");
  }
});
```

### 6. ❌ Deleting Directories

```js
fs.rmdir("myDirectory", (err) => {
  if (err) {
    console.error("Error deleting directory:", err);
  } else {
    console.log("Directory deleted successfully");
  }
});
```

---

## 🚀 Nodemon – Developer Utility

**Nodemon** automatically restarts your Node.js app when file changes are detected.

### Installation

```bash
npm install -g nodemon
```

### Usage

```bash
nodemon yourfile.js
```

---

## 🛤️ Path Module – Cross-Platform Path Management

The `path` module in Node.js helps manage file paths in a platform-independent way.

### 1. `path.join()`

```js
const path = require("path");
const joinedPath = path.join("folder", "subfolder", "file.txt");
console.log(joinedPath);
```

### 2. `path.resolve()`

```js
const resolvedPath = path.resolve("folder", "subfolder", "file.txt");
console.log(resolvedPath);
```

📌 **Analogy**: Just like a full address includes house number and street, a resolved path includes the full path from root to file.

---

## 📚 Homework Assignment: Organize the Downloads Folder

### Objective:

Automatically organize files into subfolders based on file types.

### Example Code:

```js
const fs = require("fs");
const path = require("path");

fs.readdir("Downloads", (err, files) => {
  if (err) throw err;

  files.forEach((file) => {
    const fileExt = path.extname(file).toLowerCase();
    let folder = "Others";

    switch (fileExt) {
      case ".jpg":
      case ".png":
        folder = "Photos";
        break;
      case ".mp4":
        folder = "Videos";
        break;
      case ".mp3":
        folder = "Music";
        break;
      case ".pdf":
      case ".docx":
        folder = "Documents";
        break;
      // Add more cases as needed
    }

    const oldPath = path.join("Downloads", file);
    const newDir = path.join("Downloads", folder);
    const newPath = path.join(newDir, file);

    if (!fs.existsSync(newDir)) {
      fs.mkdirSync(newDir);
    }

    fs.rename(oldPath, newPath, (err) => {
      if (err) throw err;
      console.log(`${file} moved to ${folder}`);
    });
  });
});
```

---

## ✅ Summary

- The **FS module** is powerful for file system operations in Node.js.
- Asynchronous methods prevent blocking the event loop.
- **Error handling** is crucial.
- **Nodemon** boosts productivity.
- **Path module** ensures cross-platform compatibility.