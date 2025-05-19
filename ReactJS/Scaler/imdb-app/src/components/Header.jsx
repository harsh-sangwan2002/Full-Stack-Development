import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div className="header">
            <Link to="/">
                <h1>IMDB</h1>
            </Link>
            <ul>
                <li className="header-links">
                    <Link to="/">Movies</Link>
                </li>
                <li className="header-links">
                    <Link to="/details">Details</Link>
                </li>
                <li className="header-links">
                    <Link to="/watchlist">WatchList</Link>
                </li>
            </ul>
        </div>
    )
}

export default Header
