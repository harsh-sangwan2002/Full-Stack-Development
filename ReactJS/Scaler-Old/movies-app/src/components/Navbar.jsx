import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div className='flex items-center p-5 text-white'>
            <img className='h-8' src="https://cdn-icons-png.flaticon.com/512/2503/2503508.png" />
            <Link to="/" className='m-4 text-blue-600 text-3xl font-bold'>Movies</Link>
            <Link to="/watchList" className="text-blue-600 text-3xl font-bold">WatchList</Link>
        </div>
    )
}

export default Navbar
