import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="nav-logo">
        <Link to="/" className="navbar-link">daniellei.</Link>
      </div>
      <ul className="nav-menu">
        <li><Link to="/about" className="navbar-link">about</Link></li>
        <li><Link to="/portfolio" className="navbar-link">portfolio</Link></li>
        <li><Link to="/projects" className="navbar-link">projects</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
