import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './App.css'
import Navbar from './components/Navbar'
import { lazy, Suspense, useEffect, useState } from 'react'
import ItemList from './components/ItemList'

const About = lazy(() => import('./pages/About/About'))
const Contact = lazy(() => import('./pages/Contact/Contact'))
const LargeSumArray = lazy(() => import('./components/LargeSumArray'))

function App() {

  const [HomePage, setHomePage] = useState(null);
  // dynamic import
  useEffect(() => {
    import('./components/LargeSumArray')
      .then(module => {
        setHomePage(module.export);
      })
      .catch(err => {
        console.error('Error loading LargeSumArray component:', err);
      });
  }, [])

  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar />
        <Routes>
          <Route path="/" element={[HomePage && <HomePage />, <LargeSumArray />, <ItemList />]} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App
