import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <nav>
            <Link to="/games">Trivia Game Page</Link>
            &nbsp; | &nbsp;
            <Link to="/pokebags">Pokebag Page</Link>
            &nbsp; | &nbsp;
            <Link to="/">Pokedex Page</Link>
        </nav>
    );
}

//link to other pages 