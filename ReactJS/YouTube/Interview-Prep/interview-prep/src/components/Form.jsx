import React, { useState } from 'react'

function Form() {

    const [name, setName] = useState("");
    const handleClick = () => {
        console.log(name);
    }

    return (
        <div>
            <label htmlFor="name">Name:</label>
            <input value={name} type="text" id='name' onChange={(e) => setName(e.target.value)} />
            <button onClick={handleClick}>Submit</button>
        </div>
    )
}

export default Form
