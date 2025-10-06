import { useState } from "react"

const TodoList = () => {

    const [todos, setTodos] = useState([]);
    const [currentTodo, setCurrentTodo] = useState("");

    const addTodo = () => {
        if (currentTodo.trim() === "") return;

        setTodos([...todos, currentTodo]);
        setCurrentTodo("");
    }

    const handleRemove = (index) => {
        const newTodos = todos.filter((_, i) => i !== index);
        setTodos(newTodos);
    }

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: '1rem', marginTop: '2rem' }}>
            <h1>Todo List</h1>
            <section style={{ display: "flex", gap: '1rem', justifyContent: "center", alignItems: "center" }}>
                <input
                    type="text"
                    value={currentTodo}
                    onChange={(e) => setCurrentTodo(e.target.value)}
                    placeholder="Add a new todo"
                />
                <button onClick={addTodo}>Add Todo</button>
            </section>
            <ul>
                {todos.map((todo, index) => (
                    <div key={index} style={{ display: "flex", justifyContent: "flex-start", alignItems: "center", gap: '1rem' }}>
                        <li key={index}>{todo}</li>
                        <button onClick={() => handleRemove(index)}>Remove</button>
                    </div>
                ))}
            </ul>
            <button onClick={() => setTodos([])}>Clear All</button>
        </div>
    )
}

export default TodoList
