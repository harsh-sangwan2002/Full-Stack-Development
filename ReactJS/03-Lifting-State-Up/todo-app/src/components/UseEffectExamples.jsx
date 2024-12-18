import React, { useState, useEffect } from 'react'
import InputBox from './InputBox';
import List from './List';

function UseEffectExamples() {

    const [taskArr, setTasks] = useState([]);

    const addTaskItem = (task) => {
        const newTaskArr = [...taskArr, task];
        setTasks(newTaskArr);
    }

    const handleDelete = (id) => {
        const filteredArr = taskArr.filter((task, idx) => id != idx);
        setTasks(filteredArr);
    }

    function firstCb() {
        console.log("First useEffect");
    }

    function secondCb() {
        console.log("Second useEffect");
    }

    function thirdCb() {
        console.log("Third useEffect");
    }

    // 1st version -> only it's cb fn only once after first render
    // useEffect(firstCb, []);

    // 2nd version -> it's cb fn is called after every render and re-render
    // useEffect(secondCb);

    // 3rd version -> it's cb fn is called after render and after the element changes it's value 
    // inside  the dependecy array
    // useEffect(thirdCb, [taskArr]);
    useEffect(thirdCb, [count]);

    console.log("Render");

    return (
        <div>
            <InputBox addTaskItem={addTaskItem} />
            <List taskArr={taskArr} handleDelete={handleDelete} />
        </div>
    )
}

export default UseEffectExamples