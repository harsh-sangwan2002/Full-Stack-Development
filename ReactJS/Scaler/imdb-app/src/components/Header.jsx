import React from 'react'

const Header = () => {
    return (
        <div className='header'>
            <h1>Header</h1>
            <ul>
                <li>
                    <Link to="/">Movies</Link>
                </li>
                <li>
                    <Link to="/watchlist">Watchlist</Link>
                </li>
                <li>
                    <Link to="/details">Details</Link>
                </li>
            </ul>
        </div>
    )
}

export default Header
