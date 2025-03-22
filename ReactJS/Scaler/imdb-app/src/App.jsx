import WatchListContext from './context/WatchListContext'
import MovieListPage from './pages/MoveListPage.jsx'
import WatchList from './pages/WatchList.jsx'
import MovieDetail from './pages/MovieDetail.jsx'
import Header from './components/Header.jsx'

import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <WatchListContext>
        <Header />
        <Routes>
          <Route path="/" element={<MovieListPage />} />
          <Route path="/details" element={<MovieDetail />} />
          <Route path="/watchlist" element={<WatchList />} />
        </Routes>
      </WatchListContext>
    </Router>
  )
}

export default App
