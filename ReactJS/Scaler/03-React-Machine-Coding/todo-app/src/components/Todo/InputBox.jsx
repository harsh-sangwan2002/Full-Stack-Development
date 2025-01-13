import React, { useState } from 'react'

function InputBox({ AddTask }) {

    const [value, setValue] = useState("");

    return (
        <div>
            <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
            <button type='submit'
                onClick={() => {
                    AddTask(value);
                    setValue("");
                }}>Add Task</button>
        </div>
    )
}

export default InputBox
