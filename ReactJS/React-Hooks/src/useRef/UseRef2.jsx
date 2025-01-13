import React, { useEffect, useRef } from 'react'

function UseRef2() {

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current?.focus();
    }, [])

    return (
        <div className='container'>
            <input type="text" ref={inputRef} placeholder='Type something...' />
        </div>
    )
}

export default UseRef2
