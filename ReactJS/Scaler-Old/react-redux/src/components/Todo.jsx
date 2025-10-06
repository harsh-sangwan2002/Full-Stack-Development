import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import todoSlice from '../redux/todoSlice';

const action = todoSlice.actions;

function Todo() {

    const { todoList, currTask } = useSelector(store => store.todoState);
    const dispatch = useDispatch();

    const handleChange = (e) => {
        dispatch(action.setValue(e.target.value));
    }

    const handleClick = () => {
        dispatch(action.addTodo());
    }
    return (
        <div>
            <div>
                <input value={currTask} onChange={handleChange} type="text" />
                <button onClick={handleClick}>Add Task</button>
            </div>
            <div>
                <ul>
                    {
                        todoList.map((task, idx) => (
                            <li key={idx}>{task}</li>
                        ))
                    }
                    {/* <li>Task 1</li>
                    <li>Task 2</li>
                    <li>Task 3</li> */}
                </ul>
            </div>
        </div>
    )
}

export default Todo
