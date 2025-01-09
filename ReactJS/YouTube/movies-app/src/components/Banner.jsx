import React, { Component } from 'react';
import { movies } from '../utils/getMovies';

export default class Banner extends Component {
    render() {
        let movie = movies.results[0];

        return (
            <div>
                {movie.length === 0 ? (
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                ) : (
                    <div className="banner-card">
                        <img
                            src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                            className="banner-img card-img-top"
                            alt={movie.title}
                        />
                        <h5 className="banner-title">{movie.title}</h5>
                        <p className="card-text banner-text">{movie.overview}</p>
                    </div>
                )}
            </div>
        );
    }
}
