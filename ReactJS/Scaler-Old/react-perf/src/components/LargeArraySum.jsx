import { useMemo, useState } from "react";

const generateLargeArray = () => {
    console.log("Generating the array");
    const largeArray = [];

    for (let i = 0; i < 1000000; i++)
        largeArray.push(i);

    return largeArray;
}

const sumArray = (arr) => {
    console.log("Calculating the sum...");
    return arr.reduce((ele, acc) => acc += ele, 0)
}

export default function LargeArraySum() {

    const [count, setCount] = useState(0);
    // Invoke cb only on the mounting 
    const largeArray = useMemo(() => generateLargeArray(), [])
    const sum = useMemo(() => sumArray(largeArray), []);

    return (
        <div>
            <h1>Sum: {sum}</h1>
            <button onClick={() => setCount(prev => prev + 1)}>Increment</button>
            <p>Count is: {count}</p>
        </div>
    )
}