import { Link } from "react-router-dom";
import "./Nav.css";

export const Nav =() => {
    return (
        <nav className="nav">
            <ul className="nav__list">
                <li><Link to="/"> Página blanca</Link></li>
                <li><Link to="/pagina_roja"> Página roja</Link></li>
                <li><Link to="/pagina_verde"> Página verde</Link></li>
            </ul>
        </nav>
    )
}