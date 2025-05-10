import { Table } from 'antd'

const MovieList = () => {

    const movies = [
        {
            key: "1",
            poster: "Image1",
            name: "Mastney",
            description: "Set in Nadar Shah's undefeated army was attacked by Sikh Rebellions",
            duration: 120,
            genre: "Action",
            language: "Hindi",
            releaseDate: "Oct 25, 2023"
        },
        {
            key: "1",
            poster: "Image1",
            name: "Mastney",
            description: "Set in Nadar Shah's undefeated army was attacked by Sikh Rebellions",
            duration: 120,
            genre: "Action",
            language: "Hindi",
            releaseDate: "Oct 25, 2023"
        }
    ]
    const tableHeading = [
        {
            title: "Poster",
        },
        {
            title: "Movie name",
            dataIndex: "name"
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

    return (
        <div>
            <Table columns={tableHeading} dataSource={movies} />
        </div>
    )
}

export default MovieList
