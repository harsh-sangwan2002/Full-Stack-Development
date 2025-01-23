import React, { useEffect, useState } from 'react'
import { movies } from './GetMovies';

function Banner() {

    const [trendingMovie, setTreandingMovie] = useState();

    useEffect(() => {
        let res = movies.results[Math.floor(Math.random() * movies.results.length)];
        setTreandingMovie(res);
    }, []);

    return (
        <>
            {
                !trendingMovie ? <div>Loading...</div> :
                    <div className='relative flex flex-col justify-around items-center'>
                        <img className='h-[45rem] w-screen p-5 object-cover rounded-sm' src={`https://image.tmdb.org/t/p/original/${trendingMovie?.backdrop_path}`} alt="" />
                        <p className='bg-slate-300 absolute bottom-6 text-6xl tracking-wide text-blue-600 mt-10'>{trendingMovie?.original_title}</p>
                    </div>
            }
        </>
    )
}

export default Banner
