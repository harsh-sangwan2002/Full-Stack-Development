import { useRef } from "react"

const Ref = () => {

    const inputRef = useRef(null);
    const handleClick = () => {
        inputRef.current.focus();
    }

    return (
        <div>
            <h1>Todo App</h1>
            <input ref={inputRef} type="text" placeholder='Enter some text' />
            <button onClick={handleClick}>Click on me to focus on the input</button>
        </div>
    )
}

export default Ref
