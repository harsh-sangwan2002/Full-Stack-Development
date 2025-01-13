import { useState } from 'react'
import './App.css'
import InfiniteScroll from './components/InfiniteScroll'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <InfiniteScroll />
    </>
  )
}

export default App
