import React from 'react'

function List(props) {

    const tasks = props.taskArr;

    return (
        <ul>
            {
                tasks.map((task,idx) => (
                    <li key={idx}>{task}</li>
                ))
            }
        </ul>
    )
}

export default List
