import React from 'react';

const WatchList = ({ watchlist, setWatchlist }) => {
    const handleRemove = (movie)=>{
        const getMovie = watchlist[movie.id]
        if(getMovie){
            delete watchlist[movie.id]
            setWatchlist({...watchlist})
        }

        return;
    }

    return (
        <div className='watchlist-container'>
            <h1>WatchList</h1>
            <table>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Id</th>
                        <th>Movie</th>
                        <th>Popularity</th>
                        <th>Vote Average</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Object.values(watchlist).map((movie) => (
                            <tr key={movie.id}>
                                <td><img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt={movie.original_title} /></td>
                                <td>{movie.id}</td>
                                <td>{movie.original_title}</td>
                                <td>{movie.popularity}</td>
                                <td>{movie.vote_average}</td>
                                <td><button onClick={()=>handleRemove(movie)}>Remove</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default WatchList;
