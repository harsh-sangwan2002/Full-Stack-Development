import { useState } from 'react'
import './App.css'

function App() {
  const [items, setItems] = useState(["Item 1", "Item 2", "Item 3"])

  const handleAddNewTodo = (e) => {
    if (e.key === "Enter") {
      setItems([e.target.value, ...items])
      setInputValue("")
    }
  }

  return (
    <>
      <h1>Todo App</h1>
      <input type="text" placeholder='Enter an item' onKeyDown={handleAddNewTodo} />
      <ul style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {
          items.map((item, index) => (
            <li style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }} key={item}>
              {item}
              <button>Delete</button>
            </li>
          ))
        }
      </ul>
    </>
  )
}

export default App
