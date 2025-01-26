import React, { useState, useEffect } from 'react'

function FuncTodo() {

    const [currTodo, setCurrTodo] = useState('');
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        console.log("useEffect -> fetching initial data");
        setTimeout(() => {
            setTodos(['learn React', 'learn Angular', 'learn Vue']);
        }, 1000);

        return () => {
            console.log("Cleaning up resources");
        }
    }, []); // mounting

    useEffect(() => {
        console.log("Updated todo list: ", todos);
    }, [todos]) // on updating todos

    const addTodo = () => {
        setTodos([...todos, currTodo]);
        setCurrTodo('');
    }

    return (
        <div>
            <h1>I am Function Based Todo</h1>
            <input type="text" value={currTodo} onChange={(e) => setCurrTodo(e.target.value)} />
            <button onClick={addTodo}>Add Task</button>
            <ul>
                {
                    todos.map((todo, idx) => {
                        return <li key={idx}>{todo}</li>
                    })
                }
            </ul>
        </div>
    )
}

export default FuncTodo
