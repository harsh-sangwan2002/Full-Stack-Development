import Navbar from './components/Navbar'
import Movies from './components/Movies'
import Banner from './components/Banner'
import Pagination from './components/Pagination'
import WatchList from './components/WatchList'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Banner />
            <Movies />
          </>
        } />
        <Route path="/watchlist" element={<WatchList />} />
      </Routes>
    </Router>
  )
}

export default App
