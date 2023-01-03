import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <nav>
            <Link to="/game">Game Page</Link>
            &nbsp; | &nbsp;
            <Link to="/music">Music Page</Link>
        </nav>
    );
}

//link to other pages 