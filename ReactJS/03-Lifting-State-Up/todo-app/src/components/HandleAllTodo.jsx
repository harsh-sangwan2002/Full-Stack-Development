import React, { useState } from 'react'
import InputBox from './InputBox';
import List from './List';

function HandleAllTodo() {

    const [taskArr,setTasks] = useState([]);

    const addTaskItem = (task)=>{
        const newTaskArr = [...taskArr,task];
        setTasks(newTaskArr);
    }

    return (
        <div>
            <InputBox addTaskItem={addTaskItem}/>
            <List taskArr={taskArr}/>
        </div>
    )
}

export default HandleAllTodo
