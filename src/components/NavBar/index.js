import { Link } from "react-router-dom";
import "./NavBar.css";
import logo from '../../assets/images/logo.jpg'

export default function NavBar() {
  return (
    <header className="nav-header container">
      <div className="menu-hamburger">
        <span className="menu-hamburger__icone"></span>
      </div>
      <div className="nav-header-container">
        <Link to="/" className="flex flex--center">
           <img className="nav-header__logo" src={logo} alt="Star Wars Logo"/> 
        </Link>
      </div>

      <nav className="menu-nav-header">
        <ul className="menu-itens">
          <li>
            <Link to="/" className="menu-item menu-item--enter">
              Home
            </Link>
          </li>
          <li>
            <Link to="/people" className="menu-item">
              Actors
            </Link>
          </li>
          <li>
            <Link to="/starships" className="menu-item">
              Starships
            </Link>
          </li>
          <li>
            <Link to="/planets" className="menu-item">
              Planets
            </Link>
          </li>
          <li>
            <Link to="/films" className="menu-item">
              Films
            </Link>
          </li>
          <li>
            <Link to="/vehicles" className="menu-item">
              Vehicles
            </Link>
          </li>
          <li>
            <Link to="/demo" className="menu-item">
            Demo
            </Link>
          </li>
        </ul>
      </nav>
      <div className="menu-nav-header-background"></div>
    </header>
  );
}
