import { useMemo, useState } from "react";

const sumArray = (array) => {
    return array.reduce((acc, curr) => acc + curr, 0);
}

const LargeSumArray = () => {

    const generateLargeArray = useMemo(() => {
        const largeArray = [];
        for (let i = 0; i < 10000000; i++) {
            largeArray.push(Math.floor(Math.random() * 100));
        }
        return largeArray;
    }, []);

    // By using useMemo, we ensure that the sum is only recalculated when the array changes
    // In this case, the array is generated only once, so the sum will be calculated only once
    // This is a performance optimization
    const sum = useMemo(() => sumArray(generateLargeArray), [generateLargeArray]);

    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>Sum: {sum}</h1>
            <button onClick={() => setCount(prev => prev + 1)}>Increment</button>
            <p>Count is: {count}</p>
        </div>
    )
}

export default LargeSumArray
