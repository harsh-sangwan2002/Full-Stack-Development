import './App.css'
import Carousel from './components/Carousel'
import Modal from './components/Modal'
import Ref from './components/Ref'
import Timer from './components/Timer'
import useModal from './hooks/useModal'

function App() {

  const { visible, hide, toggle, show } = useModal(true);

  return (
    <>
      {/* <Ref /> */}
      {/* <Timer /> */}
      {/* <Carousel /> */}
      <button onClick={show}>Show Modal</button>
      <button onClick={toggle}>Toggle Modal</button>
      <Modal isVisible={visible} hide={hide} />
    </>
  )
}

export default App
