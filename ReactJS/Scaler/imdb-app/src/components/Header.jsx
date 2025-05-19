import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div className="header">
            <Link>
                <h1>IMDB</h1>
            </Link>
            <ul>
                <li>
                    <Link to="/">Movies</Link>
                </li>
                <li>
                    <Link to="/details">Details</Link>
                </li>
                <li>
                    <Link to="/watchlist">WatchList</Link>
                </li>
            </ul>
        </div>
    )
}

export default Header
