import React from 'react'

function List(props) {

    const tasks = props.tasksArr;
    
    return (
        <ul>
            {
                tasks.map(task => (
                    <li>{task}</li>
                ))
            }
        </ul>
    )
}

export default List
