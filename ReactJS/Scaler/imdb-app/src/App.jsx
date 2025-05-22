import { lazy, Suspense, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

const Header = lazy(() => import('./components/Header'))
const MovieListPage = lazy(() => import('./pages/MovieListPage'))
const MovieDetailPage = lazy(() => import('./pages/MovieDetailPage'))
const WatchListPage = lazy(() => import('./pages/WatchListPage'))
const SingleMovieDetail = lazy(() => import('./components/SingleMovieDetail'))

function App() {

  // Old way of importing WatchListPage
  // const [WatchListPage, setWatchListPage] = useState(null)
  // useEffect(() => {
  //   import('./pages/WatchListPage')
  //     .then((module) => {
  //       setWatchListPage(module.default)
  //     })
  //     .catch((error) => { 
  //       console.error('Error loading WatchListPage:', error)
  //     })
  // }, [])

  return (
    <Router>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<MovieListPage />} />
          <Route path='/single-movie/:id' element={<SingleMovieDetail />} />
          <Route path='/details' element={<MovieDetailPage />} />
          <Route path='/watchlist' element={<WatchListPage />} />
          <Route path='*' element={<h2>Page not found</h2>} />
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App
