import React from 'react'

// Props destructuring
const Heading = ({ title, color }) => {
    return <h1 style={{ color: `${color}` }}>{title}</h1>
}

const List = () => {
    return <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
    </ul>
}

const Summary = () => {
    return <h1>Summary of Todo List</h1>
}

const TodoList = () => {
    return (
        <div>
            {/* Passing props to the component */}
            <Heading title="First Heading" color="red" />
            <Heading title="Second Heading" color="green" />
            <List />
            <Summary />
        </div>
    )
}

export default TodoList
