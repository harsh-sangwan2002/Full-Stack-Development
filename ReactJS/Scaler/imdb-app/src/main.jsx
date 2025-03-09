import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import MovieList from './pages/MoveList.jsx'
import WatchList from './pages/WatchList.jsx'
import MovieDetail from './pages/MovieDetail.jsx'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
    <Router>
        
        <Routes>
            <Route path="/" element={<MovieList />} />
            <Route path="/details" element={<MovieDetail />} />
            <Route path="/watchlist" element={<WatchList />} />
        </Routes>
    </Router>
)
