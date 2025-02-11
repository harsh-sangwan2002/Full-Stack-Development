import React, { createRef, useRef, useState } from 'react'

function Form2() {

    const inputValue = createRef();
    const handleClick = () => {
        console.log(inputValue.current.value);
    }

    return (
        <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id='name' ref={inputValue} />
            <button onClick={handleClick}>Submit</button>
        </div>
    )
}

export default Form2
