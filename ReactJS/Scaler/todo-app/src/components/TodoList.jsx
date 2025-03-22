import React, { useState } from 'react'

const TodoList = () => {

    const [currTodo, setTodo] = useState("")
    const [todos, setTodos] = useState([])

    const handleAdd = () => {
        setTodos([...todos, currTodo])
        setTodo("")
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
                        return <li key={index}>{item}</li>
                    })
                }
            </ul>
        </div>
    )
}

export default TodoList
