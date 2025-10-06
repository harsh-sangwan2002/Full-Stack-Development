import { useState } from 'react'
import Ref from './components/Ref'
import StopWatch from './components/StopWatch';
import Carousel from './components/Carousel';
import Modal from './components/Modal';
import useVisible from './hooks/useVisible';

function App() {

  const { isVisible, show, toggle, hide } = useVisible(true);

  return (
    <div style={{ textAlign: 'center', marginTop: '20rem' }}>
      <div style={{ marginBottom: '3rem' }} className="buttons-container">
        <button className='btn' onClick={show}>Show Modal</button>
        <button className='btn' onClick={toggle}>Toggle Modal</button>
      </div>
      <Modal isVisible={isVisible} hide={hide} />
    </div>
  )
}

export default App
