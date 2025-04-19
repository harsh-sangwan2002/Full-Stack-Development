import React, { useState } from 'react'

const TodoList = () => {

    const [currTodo, setTodo] = useState("")
    const [todos, setTodos] = useState([])

    const handleAdd = () => {
        setTodos([...todos, currTodo])
        setTodo("")
    }

    const handleRemove = (idx) => {

        const newTodos = todos.filter((item, index) => index !== idx)
        setTodos(newTodos);
    }

    return (
        <div>
            <h1>Todo List</h1>
            <div>
                <input type="text" value={currTodo} onChange={(e) => setTodo(e.target.value)} placeholder='Enter new todo' />
                <button onClick={handleAdd}>Add Todo</button>
            </div>
            <ul>
                {
                    todos.map((item, index) => {
                        return <div key={index} style={{ display: 'flex', gap: '1rem' }}>
                            <li key={index}>{item}</li>
                            <button onClick={() => handleRemove(index)}>Remove</button>
                        </div>
                    })
                }
            </ul>
        </div>
    )
}

export default TodoList
