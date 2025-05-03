import WatchListContext from './context/WatchListContext'
import Header from './components/Header.jsx'

import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'

const LazyMovieListPage = lazy(() => import('./pages/MoveListPage'));
const LazyMovieDetail = lazy(() => import('./pages/MovieDetail'));
const LazyWatchList = lazy(() => import('./pages/WatchList'));

function App() {

  // const [watchlistpageContent, setWatchlistpageContent] = useState(false);
  // useEffect(() => {
  //   import('./pages/WatchList').then((module) => {
  //     setWatchlistpageContent(module.default);
  //   });
  // }, [])

  return (
    <Router>
      <WatchListContext>
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<LazyMovieListPage />} />
            <Route path="/movie/:id" element={<LazyMovieDetail />} />
            <Route path="/watchlist" element={<LazyWatchList />} />
            <Route path="*" element={<div>404 Not Found</div>} />
          </Routes>
        </Suspense>
      </WatchListContext>
    </Router>
  )
}

export default App
