import { useEffect, useState } from "react"

const Counter = ({ qty }) => {

    const [count, setCount] = useState(qty);

    // Mount
    useEffect(() => {
        console.log("1. Counter mounted");
    }, [])

    // Update
    useEffect(() => {
        console.log("2. Counter updated - trigger on count change")
    }, [count])

    // Mount + Update
    useEffect(() => {
        console.log("3. Counter mounted/updated");
    })

    // Unmount
    useEffect(() => {
        return () => console.log("4. Counter unmounted");
    }, [])

    const handleIncrement = () => {
        setCount(prevCount => prevCount + 1);
    }

    const handleDecrement = () => {
        setCount(prevCount => prevCount - 1);
    }

    return (
        <>
            <button onClick={handleDecrement}>-</button>
            <span style={{ padding: '1rem' }}>{count}</span>
            <button onClick={handleIncrement}>+</button>
        </>
    )
}

export default Counter
