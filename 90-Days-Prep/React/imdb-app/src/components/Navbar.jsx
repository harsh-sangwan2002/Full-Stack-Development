import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <header className='header'>
            <h1><Link to="/" style={{ color: 'white', fontWeight: 'bold' }}>IMDB</Link></h1>
            <ul>
                <li><Link to="/">Movies</Link></li>
                <li><Link to="/details">Details</Link></li>
                <li><Link to="/watchlist">Watch List</Link></li>
            </ul>
        </header>
    )
}

export default Navbar
