import React from 'react'
import { movies } from './GetMovies'

function Movies() {


    return (
        <div className='flex flex-wrap justify-around mt-20'>
            {
                movies.results.map(movie => (
                    <div key={movie.id} className='relative m-4 rounded overflow-hidden'>
                        <img className='h-[15rem] w-[20rem] object-cover rounded-lg' src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt="" />
                        <p className='absolute bottom-2 left-2 text-white'>{movie.title}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default Movies
