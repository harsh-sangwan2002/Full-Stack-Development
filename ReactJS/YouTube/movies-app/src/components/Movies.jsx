import React, { Component } from 'react'
import { movies } from '../utils/getMovies';

export default class Movies extends Component {
    render() {
        let movie = movies.results;
        console.log(movie);
        return (
            <>
                {
                    movie.length === 0 ? <div class="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div> :
                        <div className="movies-list">
                            {
                                movie.map(movieObj => (
                                    <div className="card movie-card">
                                        <img src={`https://image.tmdb.org/t/p/original${movieObj.backdrop_path}`} className="movie-img card-img-top" alt="..." />
                                        <h5 className="card-title movie-title">{movieObj.title}</h5>
                                        <div className='button-wrapper'>
                                            <a href="#" className="btn btn-primary movies-button">Add To Favourites</a>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                }
            </>
        )
    }
}
