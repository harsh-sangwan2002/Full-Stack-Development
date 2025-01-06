import React from 'react'
import { Route, Routes, Link } from 'react-router-dom'

function Routing() {
    return (
        <>
            <h2>Routing Example</h2>
            <nav>
                <ul>
                    <li><Link to="/home">Home Page</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/listing">Listing</Link></li>
                </ul>
            </nav>
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/listing" element={<Listing />} />
                {/* Page not found */}
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </>
    )
}

function About() {
    return (
        <h2>About</h2>
    )
}

function Home() {
    return (
        <h3>Home</h3>
    )
}

function Listing() {
    return (
        <h3>Listing</h3>
    )
}

function PageNotFound() {
    return (
        <h3>Page not found</h3>
    )
}

export default Routing
