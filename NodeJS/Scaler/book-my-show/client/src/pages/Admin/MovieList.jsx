import { Button, Table } from 'antd'
import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { GetMovies } from '../../calls/movie';
import { showLoading, hideLoading } from '../../redux/loaderSlice';
import moment from 'moment';
import MovieForm from './MovieForm';
import DeleteMovieModal from './DeleteMovieModal';

const MovieList = () => {

    const [movies, setMovies] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [formType, setFormType] = useState("add");
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

    const dispatch = useDispatch();

    const getData = async () => {
        dispatch(showLoading());
        const res = await GetMovies();
        const allMovies = res.movies;
        setMovies(allMovies);
        dispatch(hideLoading());
    }

    const tableHeading = [
        {
            title: "Poster",
            dataIndex: "poster",
            render: (text, data) => {
                return (
                    <img
                        width='100'
                        height='150'
                        style={{ objectFit: "cover" }}
                        src={data.poster}
                        alt="poster"
                    />
                )
            }
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
            render: (text, data) => {
                return (
                    `${text} Min`
                )
            }
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
            render: (text, data) => {
                return (
                    moment(data.releaseDate).format("DD/MM/YYYY")
                )
            }
        },
        {
            title: "Action",
            render: (text, data) => {
                return (
                    <div>
                        <Button
                            onClick={() => {
                                setIsModalOpen(true);
                                setFormType("edit");
                                setSelectedMovie(data);
                            }}
                        >
                            <EditOutlined />
                        </Button>
                        <Button
                            onClick={() => {
                                setIsDeleteModalOpen(true);
                                setSelectedMovie(data);
                            }}
                        >
                            <DeleteOutlined />
                        </Button>
                    </div >
                )
            }
        }
    ]

    useEffect(() => {
        getData();
    }, [])

    return (
        <>
            <div className='d-flex justify-content-between align-items-center'>
                <Button
                    onClick={() => {
                        setIsModalOpen(true);
                        setFormType("add");
                    }}>
                    Add Movie
                </Button>
            </div>
            <Table className='mt-3' columns={tableHeading} dataSource={movies} />
            {
                isModalOpen && (
                    <MovieForm
                        isModalOpen={isModalOpen}
                        setIsModalOpen={setIsModalOpen}
                        selectedMovie={selectedMovie}
                        formType={formType}
                        getData={getData}
                    />
                )
            }
            {
                isDeleteModalOpen && (
                    <DeleteMovieModal
                        isDeleteModalOpen={isDeleteModalOpen}
                        selectedMovie={selectedMovie}
                        setIsDeleteModalOpen={setIsDeleteModalOpen}
                        setSelectedMovie={setSelectedMovie}
                        getData={getData}
                    />
                )
            }
        </>
    )
}

export default MovieList
