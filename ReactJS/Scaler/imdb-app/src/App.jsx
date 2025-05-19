import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import MovieListPage from './pages/MovieListPage'
import MovieDetailPage from './pages/MovieDetailPage'
import WatchListPage from './pages/WatchListPage'
import './App.css'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<MovieListPage />} />
        <Route path='/details' element={<MovieDetailPage />} />
        <Route path='/watchlist' element={<WatchListPage />} />
        <Route path='*' element={<h2>Page not found</h2>} />
      </Routes>
    </Router>
  )
}

export default App
