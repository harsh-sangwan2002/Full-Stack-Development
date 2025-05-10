import { Table } from 'antd'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { GetMovies } from '../../calls/movie';
import { showLoading, hideLoading } from '../../redux/loaderSlice';

const MovieList = () => {

    const [movies, setMovies] = useState([]);
    const dispatch = useDispatch();

    const getData = async () => {
        dispatch(showLoading());
        const res = await GetMovies();
        const allMovies = res.movies;
        setMovies(allMovies.map(movie => {
            return {
                ...movie,
                key: movie._id,
            }
        }))
        dispatch(hideLoading());
    }

    const tableHeading = [
        {
            title: "Poster",
        },
        {
            title: "Movie name",
            dataIndex: "movieName"
        },
        {
            title: "Description",
            dataIndex: "description",
        },
        {
            title: "Duration",
            dataIndex: "duration",
        },
        {
            title: "Genre",
            dataIndex: "genre",
        },
        {
            title: "Language",
            dataIndex: "language",
        },
        {
            title: "Release Date",
            dataIndex: "releaseDate",
        },
        {
            title: "Action"
        }
    ]

    useEffect(() => {
        getData();
    }, [])

    return (
        <div>
            <Table columns={tableHeading} dataSource={movies} />
        </div>
    )
}

export default MovieList
