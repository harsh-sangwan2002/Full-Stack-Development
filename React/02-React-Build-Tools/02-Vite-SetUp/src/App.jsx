import { useState } from 'react'
import './App.css'

function App() {

  const [tasksArr, setTasksArr] = useState([]);

  const addTask = (newTask) => {
    let newTaskArr = [...tasksArr, { task: newTask, id: tasksArr.length + 1 }];
    setTasksArr(newTaskArr);
  }

  return (<>
    <InputBox addTask={addTask} />
    <AddItemsToList tasksArr={tasksArr} />
  </>)
}

function InputBox(props) {

  const [inputValue, setInputValue] = useState("");

  const handleUserInput = (event) => {
    setInputValue(event.target.value);
  }

  return (
    <div className='inputBox'>
      <input type='text' value={inputValue} onChange={handleUserInput} />
      <button onClick={() => {props.addTask(inputValue)
        setInputValue("")
      }}>Add Task</button>
    </div>
  )
}

function AddItemsToList(props) {

  return (
    <div className='list'>
      <ul>
        {
          props.tasksArr.map(taskObj => (
            <li key={taskObj.id}>{taskObj.task}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default App;
