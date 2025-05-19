# ⚛️ Introduction to State and Hooks in React

React uses **state** to manage dynamic data and UI behavior inside components. With the introduction of **hooks**, functional components can now manage state and side effects just like class components—but with cleaner and more concise syntax.

---

## 🧠 Understanding State in React

**State** is an internal data store used to track changes over time within a component. When state updates, React **re-renders** the component to reflect the new data.

---

## 🪝 `useState` Hook

`useState` is the most fundamental React hook, enabling you to add state to functional components.

### 🔢 Example: Counter Using `useState`

```jsx
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prevCount) => prevCount + 1);
  const decrement = () => setCount((prevCount) => prevCount - 1);

  return (
    <div>
      <h1>Counter</h1>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default Counter;
```
````

### 📌 Highlights:

- `useState(0)`: Initializes `count` to 0.
- `increment` / `decrement`: Updates count.
- UI automatically re-renders on state updates.

---

## 🔁 `useEffect` Hook

The `useEffect` hook lets you perform **side effects** (like data fetching or subscriptions) in functional components.

### 💡 When Does `useEffect` Run?

| Scenario             | Syntax                                     | Behavior                           |
| -------------------- | ------------------------------------------ | ---------------------------------- |
| On Mount (once)      | `useEffect(() => {}, [])`                  | Runs once on initial render        |
| On Dependency Change | `useEffect(() => {}, [dep])`               | Runs on mount & when `dep` changes |
| On Unmount (cleanup) | `useEffect(() => { return () => {} }, [])` | Cleanup before unmount             |

---

### 🌐 Example: Data Fetching with `useEffect`

```jsx
import React, { useState, useEffect } from "react";

function DataFetcher() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://api.example.com/data");
      const result = await response.json();
      setData(result);
    };

    fetchData();
  }, []); // Only runs once on mount

  return (
    <div>
      <h2>Fetched Data</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
```

---

## 🔼 Advanced: Lifting State Up

When multiple components need to share state, move the state up to their **common ancestor**. This is called **lifting state up**.

### 🧊 Problem:

> Independent state in sibling components leads to **inconsistencies**.

### 🧽 Solution:

> Store shared state in a parent component and pass it as **props**.

---

### 🔁 Example: Temperature Converter

```jsx
function App() {
  const [temperature, setTemperature] = useState("");

  return (
    <div>
      <TemperatureInput
        temperature={temperature}
        setTemperature={setTemperature}
      />
      <TemperatureDisplay temperature={temperature} />
    </div>
  );
}
```

All components now reflect and manipulate the **same** temperature value.

---

## ✅ Best Practices

- **Never Mutate State Directly**

❌ Bad:

```js
state.value = 5;
```

✅ Good:

```js
setState((prev) => ({ ...prev, value: 5 }));
```

---

- **State Updates Are Asynchronous**

```js
setCount(count + 1);
console.log(count); // Might still show the old value
```

🔁 Always rely on the **updater function**:

```js
setCount((prevCount) => prevCount + 1);
```

---

## 🎯 Conclusion

Understanding and using React hooks like `useState` and `useEffect` allows you to:

- Manage dynamic data
- Handle side effects and lifecycle logic
- Create predictable and maintainable applications
- Promote better code structure with **lifting state up**

💬 Remember: _Always handle state immutably and embrace the asynchronous nature of React updates._

---

🚀 Happy Hooking!