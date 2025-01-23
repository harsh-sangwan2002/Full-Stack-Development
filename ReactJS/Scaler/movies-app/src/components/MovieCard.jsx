import React from 'react'

function MovieCard({ title, backdrop_path }) {
    return (
        <div className='relative m-4 rounded overflow-hidden'>
            <img className='h-[15rem] w-[20rem] object-cover rounded-lg' src={`https://image.tmdb.org/t/p/original/${backdrop_path}`} alt="" />
            <p className='absolute bottom-2 left-2 text-white'>{title}</p>
        </div>
    )
}

export default MovieCard
