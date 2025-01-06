import { Routes, Route, Navigate } from "react-router-dom"
import Home from './pages/Home';
import Profile from "./pages/Profile";
import ProductDetails from "./pages/ProductDetails";
import PageNotFound from "./pages/PageNotFound";
import NavBar from "./components/NavBar";
import './index.css';

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home></Home>}> </Route>
        <Route path="/profile" element={<Profile></Profile>}></Route>
        <Route path="/product/:id" element={<ProductDetails></ProductDetails>}> </Route>
        <Route path="/home" element={<Navigate to="/"></Navigate>}></Route>
        <Route path="*" element={<PageNotFound></PageNotFound>}> </Route>
      </Routes>
    </>
  )
}

export default App