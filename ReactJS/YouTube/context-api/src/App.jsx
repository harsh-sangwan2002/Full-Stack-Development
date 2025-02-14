import { useState } from 'react'
import Context from './components/context'
import Navbar from './components/Navbar'
import Parent1 from './components/Parent1'
import Parent2 from './components/Parent2'
import './App.css'

function App() {

  const [theme, setTheme] = useState(false);

  return (
    <Context.Provider value={theme}>
      <button onClick={() => setTheme(!theme)}>Change Theme</button>
      <Navbar />
      <Parent1 />
      <Parent2 />
    </Context.Provider>
  )
}

export default App
