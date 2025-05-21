import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import SingleMovieDetail from './components/SingleMovieDetail'
import MovieListPage from './pages/MovieListPage'
import MovieDetailPage from './pages/MovieDetailPage'
import WatchListPage from './pages/WatchListPage'
import WatchListProvider from './context/WatchListProvider'
import './App.css'

function App() {
  return (
    <WatchListProvider>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<MovieListPage />} />
          <Route path='/single-movie/:id' element={<SingleMovieDetail />} />
          <Route path='/details' element={<MovieDetailPage />} />
          <Route path='/watchlist' element={<WatchListPage />} />
          <Route path='*' element={<h2>Page not found</h2>} />
        </Routes>
      </Router>
    </WatchListProvider>
  )
}

export default App
