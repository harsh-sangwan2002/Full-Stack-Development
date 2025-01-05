// State is simply data that changes with time across re-renders.
// useEffect is a hook that allows you to perform side effects in function components.
import { useState } from "react"
import './index.css'

function App() {

  const [count, setCount] = useState(0);

  useEffect(() => {
    // Side effect - The code we want to run
    console.log("Count is: ", count);

    // Optional return function
    return () => {
      console.log("I am being cleaned up.");
    }
  }, [count]) // Optional dependacny array

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(prevCount => prevCount - 1)}>Decrement</button>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>
    </div>
  )
}

export default App
