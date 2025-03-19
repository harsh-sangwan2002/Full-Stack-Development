import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className="header">
            <h1>
                <Link to="/">IMDB</Link>
            </h1>
            <ul>
                <li>
                    <Link to="/"> Movies</Link>
                </li>
                <li>
                    <Link to="/details">Detail</Link>
                </li>
                <li>
                    <Link to="/watchlist">Watch List</Link>
                </li>
            </ul>
        </div>
    )
}

export default Header
