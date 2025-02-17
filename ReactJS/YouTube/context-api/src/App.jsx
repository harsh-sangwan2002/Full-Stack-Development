import { useState } from 'react'
import Context from './components/context'
import Navbar from './components/Navbar'
import Parent1 from './components/Parent1'
import Parent2 from './components/Parent2'
import './App.css'

function App() {

  // If any of the state is changed in context all components will be re-rendered
  const [theme, setTheme] = useState(false);
  const [count, setCount] = useState(0);

  return (
    <Context.Provider value={{ theme, count }}>
      <button onClick={() => setTheme(!theme)}>Change Theme</button>
      <button onClick={() => setCount(count + 1)}>Update count</button>
      <Navbar />
      <Parent1 />
      <Parent2 />
    </Context.Provider>
  )
}

export default App
