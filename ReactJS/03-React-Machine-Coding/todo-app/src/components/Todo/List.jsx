import React from 'react'

function List({ tasks, deleteTask }) {
    return (
        <div>
            <ul>
                {
                    tasks.map((task, idx) => (
                        <div className='list-container' key={idx}>
                            <li>{task}</li>
                            <button className='delete' onClick={() => deleteTask(idx)}>Delete</button>
                        </div>
                    ))
                }
            </ul>
        </div>
    )
}

export default List
