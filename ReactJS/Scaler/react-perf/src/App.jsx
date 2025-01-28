import { Link, BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import { useState } from 'react'

function App() {

  const [ContactPage, setContactPage] = useState(null);
  const [AboutPage, setAboutPage] = useState(null);

  const loadContact = () => {
    import('./components/Contact').then((module) => {
      setContactPage(() => module.default)
    })
  }

  const loadAbout = () => {
    import('./components/About').then((module) => {
      setAboutPage(() => module.default)
    })
  }

  return (
    <Router>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about" onClick={loadAbout}>About Us</Link></li>
        <li><Link to="/contact" onClick={loadContact}>Contact</Link></li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={ContactPage ? <ContactPage /> : <div>...loading</div>} />
        <Route path="/about" element={AboutPage ? <AboutPage /> : <div>...loading</div>} />
      </Routes>
    </Router>
  )
}

export default App
