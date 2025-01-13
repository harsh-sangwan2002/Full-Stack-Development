import React from 'react'

function List(props) {

    return (
        <div className='list'>
            <ul>
                {
                    props.tasksArr.map((item, idx) => (
                        <li key={idx}>{item} <button type='delete' onClick={() => props.handleDeleteTaskItem(idx)}>Delete</button></li>
                    ))
                }
            </ul>
        </div>
    )
}

export default List
