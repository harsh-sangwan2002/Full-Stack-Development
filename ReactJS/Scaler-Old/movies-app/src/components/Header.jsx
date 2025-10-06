import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div className="header">
            <h1>
                <Link to="/">IMDB</Link>
            </h1>
            <ul>
                <li>
                    <Link to="/">Movies</Link>
                </li>
                <li>
                    <Link to="/watchlist">WatchList</Link>
                </li>
                <li>
                    <Link to="/detail">Details</Link>
                </li>
            </ul>
        </div>
    )
}

export default Header
