import { Tabs } from 'antd';
import MovieList from './MovieList';
import TheatresTable from './TheatresTable';

const onChange = key => {
    console.log(key);
};

const tabItems = [
    {
        key: '1',
        label: 'Movies',
        children: <MovieList />,
    },
    {
        key: '2',
        label: 'Theatres',
        children: <TheatresTable />,
    },
];

const Admin = () => {
    return (
        <div>
            <h1>Welcome to Admin Panel!</h1>
            <Tabs items={tabItems} />
        </div>
    )
};

export default Admin;