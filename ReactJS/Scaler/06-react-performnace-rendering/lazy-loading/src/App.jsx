import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './App.css'
import Navbar from './components/Navbar'
import { lazy, Suspense } from 'react'
import ItemList from './components/ItemList'

const Home = lazy(() => import('./pages/Home/Home'))
const About = lazy(() => import('./pages/About/About'))
const Contact = lazy(() => import('./pages/Contact/Contact'))
const LargeSumArray = lazy(() => import('./components/LargeSumArray'))

function App() {

  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar />
        <Routes>
          {/* <Route path="/" element={<LargeSumArray />} /> */}
          <Route path="/" element={<ItemList />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App
