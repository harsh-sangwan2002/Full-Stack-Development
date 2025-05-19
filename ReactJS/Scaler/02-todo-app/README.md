# 🧠 Introduction to React State Management

React uses **state** to manage and render dynamic data in applications. Unlike regular JavaScript variables, **React state** ensures that your UI stays in sync with your data as it changes.

---

## 📦 What is State in React?

### ✅ Definition:

> **State** is a built-in object in React used to store information about a component's current condition. It determines how that component renders and behaves.

### 🔁 The `useState` Hook:

React’s `useState` hook allows functional components to have their own state.

```js
const [item, setItem] = useState(initialValue);
```
````

- `item`: Current value of the state.
- `setItem`: Function used to update the state.
- `initialValue`: Initial value of the state (can be any data type).

✨ **State persists across re-renders**, ensuring a consistent UI experience.

---

## 💡 Why Use State Over Regular Variables?

| Feature                   | JavaScript Variables | React State (`useState`) |
| ------------------------- | -------------------- | ------------------------ |
| Persist on Re-renders     | ❌                   | ✅                       |
| Triggers UI Updates       | ❌                   | ✅                       |
| Used for UI Interactivity | ❌                   | ✅                       |

---

## 📝 To-Do List: Managing State

### 📋 Creating State for To-Do Items

```js
const [todoList, setTodoList] = useState([]);
```

- `todoList`: Array of current to-do items.
- `setTodoList`: Function to update the to-do array.

### ➕ Updating State (Adding New To-Do)

```js
setTodoList([...todoList, newItem]);
```

✅ Always use the **updater function**, never modify state directly!

---

## 📦 Props vs State

| Feature  | Props              | State                       |
| -------- | ------------------ | --------------------------- |
| Mutable? | ❌ No              | ✅ Yes                      |
| Scope    | Passed from parent | Local to component          |
| Purpose  | Data transfer      | UI behavior & interactivity |

---

## 🎭 Conditional Rendering

React lets you render components based on conditions.

```js
{
  isLoggedIn ? <WelcomeComponent /> : <LoginComponent />;
}
```

👆 Show different content based on authentication or any state/prop value.

---

## 🧱 Building a Dynamic To-Do List

### 📦 Render List Items Dynamically:

```js
return (
  <ul>
    {todoList.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
);
```

Each time you add a new item, the list updates automatically based on the current state.

---

## 🧩 Event Handling

To manage user interaction (like adding a new to-do), use event handlers to update the state:

```js
const addTodo = () => {
  setTodoList([...todoList, newTodo]);
};
```

💡 **This updates the list and triggers a UI re-render automatically!**

---

## 🎯 Conclusion

React’s state management (especially with `useState`) provides a powerful and efficient way to manage dynamic data in your application.

🎉 By leveraging state and conditional rendering, you can create responsive, interactive UIs—like a functional **To-Do List App**—with minimal effort!

---

## 🚀 Example To-Do App Snippet

```jsx
import React, { useState } from "react";

function TodoApp() {
  const [todoList, setTodoList] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (newTodo.trim() === "") return;
    setTodoList([...todoList, newTodo]);
    setNewTodo("");
  };

  return (
    <div>
      <h1>📝 My To-Do List</h1>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add a new task..."
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todoList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
```

> 📌 Want more? Expand this to include deleting tasks, marking complete, and local storage persistence!

---

🧠 **Mastering state** is your first step toward becoming a skilled React developer. Happy coding!

```