import { useEffect, useState } from 'react'

export default function UseEffect() {

    const [count, setCount] = useState(0);

    // useEffect takes two things as arguments - one is callbacks function & other is dependency array
    // 1. -> When we pass empty array it will be only called on the mounting phase.
    // useEffect(() => {
    //     document.title = count;
    //     console.log("Inside useEffect callback");
    // }, [])

    // 2. -> When we don't use dependency array, it will be called on mounting and updating phase.
    // useEffect(() => {
    //     document.title = count;
    //     console.log("Inside useEffect callback");
    // })

    // 3. -> When we pass some state or props in dependency array, it will be called on mounting and when the state or props changes.
    useEffect(() => {
        document.title = count;
        console.log("Inside useEffect callback");
    }, [count]);

    console.log("UI render");
    return (
        <div>
            <h1>useEffect: Count: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    )
}