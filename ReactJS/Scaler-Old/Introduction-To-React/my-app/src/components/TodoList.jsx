import React from 'react'

const Heading = () => {
    return (
        <h1>TodoList</h1>
    )
}

const List = () => {
    return (
        <ul>
            <li>Todo 1</li>
            <li>Todo 2</li>
            <li>Todo 3</li>
        </ul>
    )
}

const Summary = () => {
    return (
        <p>You have 3 todos</p>
    )
}

const TodoList = () => {
    return (
        <div>
            <Heading />
            <List />
            <Summary />
        </div>
    )
}

export default TodoList
