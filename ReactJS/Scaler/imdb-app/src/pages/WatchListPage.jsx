import { useEffect, useState } from "react"

const WatchListPage = ({ watchlist }) => {

    const [list, setList] = useState(watchlist);

    let genreids = {
        1: "All",
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
        878: "Science Fiction",
        10770: "TV Movie",
        53: "Thriller",
        10752: "War",
        37: "Western"
    }

    const handleMovieSearch = (e) => {
        const title = e.target.value;
        const filteredMovies = Object.values(watchlist).filter((movie) => {
            return movie.title.toLowerCase().includes(title.toLowerCase());
        });
        setList(filteredMovies);
    }

    const selectedGenres = (e) => {
        let genreList = [];
        Object.values(watchlist).forEach((movie) => {
            genreList = genreList.concat(movie.genre_ids);
        });
        genreList.unshift(1);
        return [...new Set(genreList)];
    }

    const handleGenreSelection = (genreId) => {

        if (genreId === 1) {
            setList(watchlist);
            return;
        }

        const newList = Object.values(watchlist).filter((movie) => {
            return movie.genre_ids.includes(genreId);
        });
        setList(newList);
    }

    const handlePopularityAsc = () => {
        const sortedMovies = Object.values(list).sort((a, b) => a.popularity - b.popularity);
        setList(sortedMovies);
    }

    const handlePopularityDesc = () => {
        const sortedMovies = Object.values(list).sort((a, b) => b.popularity - a.popularity);
        setList(sortedMovies);
    }

    const handleVoteAverageAsc = () => {
        const sortedMovies = Object.values(list).sort((a, b) => a.vote_average - b.vote_average);
        setList(sortedMovies);
    }

    const handleVoteAverageDesc = () => {
        const sortedMovies = Object.values(list).sort((a, b) => b.vote_average - a.vote_average);
        setList(sortedMovies);
    }

    const handleReleaseDateAsc = () => {
        const sortedMovies = Object.values(list).sort((a, b) => new Date(a.release_date) - new Date(b.release_date));
        setList(sortedMovies);
    }

    const handleReleaseDateDesc = () => {
        const sortedMovies = Object.values(list).sort((a, b) => new Date(b.release_date) - new Date(a.release_date));
        setList(sortedMovies);
    }

    useEffect(() => {
        setList(watchlist);
    }, [watchlist]);

    return (
        <div>
            <h1 className="text-center mt-3">Watch List Page</h1>
            <div className="container">
                <div className="left-section">
                    <div className="genre-list">
                        {
                            selectedGenres().map(genreId => (
                                <div key={genreId} className="genre-item" onClick={() => handleGenreSelection(genreId)}>
                                    {genreids[genreId]}
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="right-section">
                    <input type="search" placeholder="Search" onChange={handleMovieSearch} />
                    <table border={1}>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Poster</th>
                                <th>Title</th>
                                <th>Genres</th>
                                <th><span onClick={handlePopularityAsc}>⬆️ </span>Popularity<span onClick={handlePopularityDesc}> ⬇️</span></th>
                                <th><span onClick={handleVoteAverageAsc}>⬆️ </span>Vote Average<span onClick={handleVoteAverageDesc}> ⬇️</span></th>
                                <th><span onClick={handleReleaseDateAsc}>⬆️ </span>Release Date <span onClick={handleReleaseDateDesc}> ⬇️</span></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Object.values(list).map((movie) => {
                                    return (
                                        <tr key={movie.id}>
                                            <td>{movie.id}</td>
                                            <td><img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} /></td>
                                            <td>{movie.title}</td>
                                            <td>{movie.genre_ids.map(genredId => genreids[genredId]).join(', ')}</td>
                                            <td>{movie.popularity}</td>
                                            <td>{movie.vote_average}</td>
                                            <td>{movie.release_date}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default WatchListPage
