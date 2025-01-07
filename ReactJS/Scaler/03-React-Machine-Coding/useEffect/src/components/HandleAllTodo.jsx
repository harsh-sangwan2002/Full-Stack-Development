import React, { useState } from 'react'
import InputBox from './InputBox';
import List from './List';

function HandleAllTodo() {

    const [tasksArr, setTasks] = useState([]);

    const addTaskItem = (taskItem) => {
        let newTaskArray = [...tasksArr, taskItem];
        setTasks(newTaskArray);
    }

    const handleDeleteTaskItem = (cidx) => {

        let filteredArr = tasksArr.filter((item, idx) => idx !== cidx);
        setTasks(filteredArr);
    }

    return (
        <div>
            <InputBox addTaskItem={addTaskItem} />
            <List tasksArr={tasksArr} handleDeleteTaskItem={handleDeleteTaskItem} />
        </div>
    )
}

export default HandleAllTodo
