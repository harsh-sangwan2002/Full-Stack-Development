import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import ProtectedRoute from './components/ProtectedRoute'
import store from './redux/store'
import Admin from './pages/Admin/Admin'
import Partner from './pages/Partner/Partner'
import Profile from './pages/Profile/Profile'

function App() {

  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='/' element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/admin' element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          } />
          <Route path='/partner' element={
            <ProtectedRoute>
              <Partner />
            </ProtectedRoute>} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </Router>
    </Provider>

  )
}

export default App
