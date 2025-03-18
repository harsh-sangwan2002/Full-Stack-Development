import MovieListPage from './pages/MoveListPage.jsx'
import WatchList from './pages/WatchList.jsx'
import MovieDetail from './pages/MovieDetail.jsx'
import Header from './components/Header.jsx'
import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'

function App() {

  const [watchlist, setWatchlist] = useState({})

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<MovieListPage watchlist={watchlist} setWatchlist={setWatchlist} />} />
        <Route path="/details" element={<MovieDetail />} />
        <Route path="/watchlist" element={<WatchList watchlist={watchlist} setWatchlist={setWatchlist}/>} />
      </Routes>
    </Router>
  )
}

export default App
