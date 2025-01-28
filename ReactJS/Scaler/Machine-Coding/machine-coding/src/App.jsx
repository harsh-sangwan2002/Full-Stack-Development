import { useState } from 'react'
import Ref from './components/Ref'

function App() {

  const [show, setShow] = useState(false);

  return (
    <>
      <h1>Hello World</h1>
      {
        show && <Ref />
      }
      <button onClick={() => setShow(!show)}>Toggle Ref Component</button>
    </>
  )
}

export default App
