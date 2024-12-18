import React, { useState } from 'react'
import InputBox from './InputBox';
import List from './List';

function HandleAllTodo() {

    const [taskArr, setTasks] = useState([]);

    const addTaskItem = (task) => {
        const newTaskArr = [...taskArr, task];
        setTasks(newTaskArr);
    }

    const handleDelete = (id) => {
        const filteredArr = taskArr.filter((task, idx) => id != idx);
        setTasks(filteredArr);
    }

    return (
        <div>
            <InputBox addTaskItem={addTaskItem} />
            <List taskArr={taskArr} handleDelete={handleDelete} />
        </div>
    )
}

export default HandleAllTodo
