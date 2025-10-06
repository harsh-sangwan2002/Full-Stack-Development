import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MovieListPage from './pages/MovieListPage.jsx'
import WatchListPage from './pages/WatchListPage.jsx'
import MovieDetailPage from './pages/MovieDetailPage.jsx'
import Header from './components/Header.jsx'
import './App.css'

function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<MovieListPage />} />
        <Route path="/watchlist" element={<WatchListPage />} />
        <Route path="/detail" element={<MovieDetailPage />} />
      </Routes>
    </Router>
  )
}

export default App
