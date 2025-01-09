import React, { Component } from 'react';
import { movies } from '../utils/getMovies';

export default class Movies extends Component {
    constructor() {
        super();
        this.state = {
            hover: '',
            parr: [1],
        };
    }

    render() {
        let movie = movies.results;
        console.log(movie);

        return (
            <>
                {movie.length === 0 ? (
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                ) : (
                    <div className="movies-list">
                        {movie.map((movieObj) => (
                            <div
                                key={movieObj.id}
                                className="card movie-card"
                                onMouseEnter={() => this.setState({ hover: movieObj.id })}
                                onMouseLeave={() => this.setState({ hover: '' })}
                            >
                                <img
                                    src={`https://image.tmdb.org/t/p/original${movieObj.backdrop_path}`}
                                    className="movie-img card-img-top"
                                    alt="..."
                                />
                                <h5 className="card-title movie-title">{movieObj.title}</h5>
                                <div className="button-wrapper">
                                    {this.state.hover === movieObj.id && (
                                        <a
                                            href="#"
                                            className="btn btn-primary movies-button"
                                        >
                                            Add To Favourites
                                        </a>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <nav aria-label="Page navigation example">
                        <ul className="pagination">
                            <li className="page-item">
                                <a className="page-link" href="#">
                                    Previous
                                </a>
                            </li>
                            {this.state.parr.map((num, idx) => (
                                <li className="page-item" key={idx}>
                                    <a className="page-link" href="#">
                                        {num}
                                    </a>
                                </li>
                            ))}
                            <li className="page-item">
                                <a className="page-link" href="#">
                                    Next
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </>
        );
    }
}
