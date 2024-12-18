import React from 'react'

function List({ taskArr, handleDelete }) {

    return (
        <ul>
            {
                taskArr.map((task, idx) => (
                    <div key={idx}>
                        <li>{task}</li>
                        <button onClick={() => handleDelete(idx)}>Delete</button>
                    </div>
                ))
            }
        </ul>
    )
}

export default List
