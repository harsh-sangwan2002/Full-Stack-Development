import React, { useState } from 'react'

function InputBox(props) {

    const [inputValue, setInput] = useState("");

    const handleInput = (e) => {
        setInput(e.target.value);
    }

    const addTaskChild = () => {
        props.addTaskItem(inputValue);
        setInput("");
    }

    return (
        <div className="input-box">
            <input type="text" value={inputValue} onChange={handleInput} />
            <button type='submit' onClick={addTaskChild}>Submit</button>
        </div>
    )
}

export default InputBox
