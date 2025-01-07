import React, { useState } from 'react'
import InputBox from './InputBox';
import List from './List';

function Todo() {

    const [tasks, setTasks] = useState([]);

    const AddTask = (task) => {
        setTasks([...tasks, task]);
    }

    const deleteTask = (index) => {

        const filteredTasks = tasks.filter((_, idx) => idx !== index);
        setTasks(filteredTasks);
    }

    return (
        <div className='container'>
            <InputBox AddTask={AddTask} />
            <List tasks={tasks} deleteTask={deleteTask} />
        </div>
    )
}

export default Todo
