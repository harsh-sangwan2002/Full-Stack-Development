import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromWatchList } from '../redux/WatchListSlice';

const WatchList = () => {

    const watchlist = useSelector(state => state.watchList);
    const dispatch = useDispatch();

    let genreids = {
        28: "Action",
        12: "Adventure",
        16: "Animation",
        35: "Comedy",
        80: "Crime",
        99: "Documentary",
        18: "Drama",
        10751: "Family",
        14: "Fantasy",
        36: "History",
        27: "Horror",
        10402: "Music",
        9648: "Mystery",
        10749: "Romance",
        878: "Sci-Fi",
        10770: "TV",
        53: "Thriller",
        10752: "War",
        37: "Western",
    };

    const [list, setList] = useState([])

    useEffect(() => {
        setList(Object.values(watchlist))
    }, [watchlist])

    // Computing this logic again and again is not a good idea
    // useMemo returns a memoized value
    const selectedGenres = useMemo(() => {

        console.log('Selected Genres executed');

        let genreList = [];
        Object.values(watchlist).forEach(movie => {
            genreList = genreList.concat(movie.genre_ids);
        });
        return [...new Set(genreList)];
    }, [watchlist]);

    // useCallback is used to memoize the function
    const handleGenreSelection = useCallback((genreId) => {
        const newList = Object.values(watchlist).filter(movie => genreId ? movie.genre_ids.includes(genreId) : true);
        setList(newList);
    }, [watchlist]);

    const handleMovieSearch = useCallback((e) => {
        const newList = Object.values(watchlist).filter((movie) => movie.original_title.toLowerCase().includes(e.target.value.toLowerCase()))
        setList(newList)
    }, [watchlist]);

    const handleRemove = useCallback((movie) => {
        const getMovie = watchlist[movie.id]
        if (getMovie) {
            dispatch(removeFromWatchList(getMovie))
        }

        return;
    }, [dispatch, watchlist]);

    const handleDescPopularity = useCallback(() => {
        const newList = Object.values(watchlist).sort((a, b) => b.popularity - a.popularity)
        setList(newList)
    }, [watchlist])

    const handleAscPopularity = useCallback(() => {
        const newList = Object.values(watchlist).sort((a, b) => a.popularity - b.popularity)
        setList(newList)
    }, [watchlist]);

    const handleDescVote = useCallback(() => {
        const newList = Object.values(watchlist).sort((a, b) => b.vote_average - a.vote_average)
        setList(newList)
    }, [watchlist]);

    const handleAscVote = useCallback(() => {
        const newList = Object.values(watchlist).sort((a, b) => a.vote_average - b.vote_average)
        setList(newList)
    }, [watchlist]);

    return (
        <div className='watchlist-container'>
            <h1 className='primary-heading'>WatchList</h1>
            <div className="container">
                <section className="genre-list">
                    <div className="genre" onClick={() => handleGenreSelection('')}>All</div>
                    {selectedGenres.map((genreId, idx) => (
                        <div key={idx} className="genre" onClick={() => handleGenreSelection(genreId)}>{genreids[genreId]}</div>
                    ))}
                </section>
                <section className="right-section">
                    <input type='text' placeholder='Search Movie' onChange={handleMovieSearch} className='search-input' />
                    <br />
                    <table>
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Id</th>
                                <th>Movie</th>
                                <th><span onClick={handleDescPopularity}>⬆️</span> Popularity <span onClick={handleAscPopularity}>⬇️</span></th>
                                <th><span onClick={handleDescVote}>⬆️</span> Vote Average <span onClick={handleAscVote}>⬇️</span></th>
                                <th>Genres</th>
                                <th>Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                list.map((movie) => (
                                    <tr key={movie.id}>
                                        <td><img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt={movie.original_title} /></td>
                                        <td>{movie.id}</td>
                                        <td>{movie.original_title}</td>
                                        <td>{movie.popularity}</td>
                                        <td>{movie.vote_average}</td>
                                        <td>{movie.genre_ids.map(genre => genreids[genre]).join(', ')}</td>
                                        <td><button onClick={() => handleRemove(movie)}>Remove</button></td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </section>
            </div>
        </div>
    );
}

export default WatchList;
