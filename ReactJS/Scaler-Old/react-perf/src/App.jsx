import { Link, BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import { useState, lazy, Suspense } from 'react'
import LargeArraySum from './components/LargeArraySum';
import Todo from './components/Todo';

function App() {

  // const [ContactPage, setContactPage] = useState(null);
  // const [AboutPage, setAboutPage] = useState(null);

  // const loadContact = () => {
  //   import('./components/Contact').then((module) => {
  //     setContactPage(() => module.default)
  //   })
  // }

  // const loadAbout = () => {
  //   import('./components/About').then((module) => {
  //     setAboutPage(() => module.default)
  //   })
  // }

  const Home = lazy(() => import('./components/Home'));
  const Contact = lazy(() => import('./components/Contact'));
  const About = lazy(() => import('./components/About'));

  return (
    // <Router>
    //   <Suspense fallback={<div>Loading...</div>}>
    //     <ul>
    //       <li><Link to="/">Home</Link></li>
    //       <li><Link to="/about">About Us</Link></li>
    //       <li><Link to="/contact">Contact</Link></li>
    //     </ul>
    //     <Routes>
    //       <Route path="/" element={<Home />} />
    //       <Route path="/contact" element={<Contact />} />
    //       <Route path="/about" element={<About />} />
    //     </Routes>
    //   </Suspense>
    // </Router>
    // <LargeArraySum />
    <Todo />
  )
}

export default App
