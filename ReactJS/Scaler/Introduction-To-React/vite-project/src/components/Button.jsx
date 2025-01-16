import React from 'react'

function Button() {

    const handleClick = () => {
        console.log("Button was clicked.");
    }

    return (
        <button onClick={handleClick}>
            Click Me & Check console
        </button>
    )
}

export default Button
