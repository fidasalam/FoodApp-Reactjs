import React, { useState } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import { Link } from 'react-router-dom';

// NavbarBrand Component
const NavbarBrand = () => {
  return (
    <a className="navbar-brand" href="index.html">
      <span>The Crust</span>
    </a>
  );
};

// NavbarToggle Component
const NavbarToggle = ({ onToggle }) => {
  return (
    <button
      className="navbar-toggler"
      type="button"
      onClick={onToggle}
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className=""> </span>
    </button>
  );
};

// NavbarLinks Component
const NavbarLinks = ({ isCollapsed }) => {
  return (
    <div className={`collapse navbar-collapse ${isCollapsed ? '' : 'show'}`} id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/menu" className="nav-link">
            Menu
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link">
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/offer" className="nav-link">
            Offers
          </Link>
        </li>
      </ul>
    </div>
  );
};

// UserOptions Component
const UserOptions = () => {
  return (
    <div className="user_option" id="home">
      <a href="index.html" className="user_link">
        <i className="fa fa-user" aria-hidden="true"></i>
      </a>
      <Link to="/cart" className="user_link">
        <i className="fa fa-shopping-cart" aria-hidden="true"></i>
      </Link>
    </div>
  );
};

// Header Component
const Header = () => {
  const [isNavbarCollapsed, setIsNavbarCollapsed] = useState(true);

  const toggleNavbar = () => {
    setIsNavbarCollapsed(!isNavbarCollapsed);
  };

  return (
    <header className="header_section">
      <div className="container">
        <nav className="navbar navbar-expand-lg custom_nav-container">
          <NavbarBrand />
          <NavbarLinks isCollapsed={isNavbarCollapsed} />
          <UserOptions />
          <NavbarToggle onToggle={toggleNavbar} />
        </nav>
      </div>
    </header>
  );
};

export default Header;
