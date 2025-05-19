import { useState } from "react";

const TodoList = ({ title }) => {

    const [items, setItems] = useState(["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6", "Item 7"]);
    let newItem = '';

    const handleAddTodo = () => {
        // React will only re-render if there is a change in props or state.
        setItems([...items, newItem]);
    }

    const handleChange = (e) => {
        newItem = e.target.value;
        console.log(newItem);
    }

    return (
        <div>
            <h1>{title || "Todo List"}</h1>
            <div style={{ display: 'flex' }}>
                <input type="text" placeholder="Enter a todo" onChange={handleChange} />
                <button onClick={handleAddTodo}>Add Todo</button>
            </div>
            <ul>
                {
                    items.map((item, idx) => (
                        <li key={idx}>{item}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default TodoList
