import React, { useState } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';

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
const NavbarLinks = () => {
  return (
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto">
        <li className="nav-item active">
          <a className="nav-link" href="index.html">
            Home <span className="sr-only"></span>
          </a>
        </li>
        <li className="nav-item ">
          <a className="nav-link" href="index.html">
            Menu<span className="sr-only"></span>
          </a>
        </li>
        <li className="nav-item ">
          <a className="nav-link" href="index.html">
            About<span className="sr-only"></span>
          </a>
        </li>
     
       
      
      </ul>
    </div>
  );
};

// UserOptions Component
const UserOptions = () => {
  return (
    <div className="user_option">
      <a href="index.html" className="user_link">
        <i className="fa fa-user" aria-hidden="true"></i>
      </a>
      <a href="cart.html" className="user_link">
        <i className="fa fa-shopping-cart" aria-hidden="true"></i>
      </a>
      <form className="form-inline">
        <button className="btn my-2 my-sm-0 nav_search-btn" type="submit">
          <i className="fa fa-search" aria-hidden="true"></i>
        </button>
      </form>
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
       
          <div className={`collapse navbar-collapse ${isNavbarCollapsed ? '' : 'show'}`} id="navbarSupportedContent">
            <NavbarLinks />
          </div>
          <UserOptions />
          <NavbarToggle onToggle={toggleNavbar} />
        </nav>
      </div>
    </header>
  );
};

export default Header;
