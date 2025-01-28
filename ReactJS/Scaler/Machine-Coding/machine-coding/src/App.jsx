import { useState } from 'react'
import Ref from './components/Ref'
import StopWatch from './components/StopWatch';
import Carousel from './components/Carousel';

function App() {

  // const [show, setShow] = useState(false);

  return (
    <>
      {/* <h1>Hello World</h1>
      {
        show && <Ref />
      }
      <button onClick={() => setShow(!show)}>Toggle Ref Component</button> */}
      {/* <StopWatch /> */}
      <Carousel />
    </>
  )
}

export default App
