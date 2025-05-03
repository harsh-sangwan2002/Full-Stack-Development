import Counter from "./components/Counter"
import './App.css'

function App() {

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem', marginTop: '5rem' }}>
      <h1>Counter App</h1>
      <Counter />
    </div>
  )
}

export default App
