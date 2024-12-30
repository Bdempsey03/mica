import React from "react";
import { useLocation, Link } from "react-router-dom";
import PropTypes from 'prop-types';
import LogoNavButton from './LogoNavButton.js';

const Navbar = ({ setCarouselIndex }) => {
  const location = useLocation();

  const handleNavClick = (slideIndex) => {
    setCarouselIndex(slideIndex);
  };

  const isHomePage = location.pathname === "/";//if not home page then do not show carousel options

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        <LogoNavButton/>
      </Link>
        <div>
        <ul className="navbar-nav">
          {isHomePage && (
            <>
          <li className="nav-item active">
          <a className="nav-link" href="#" onClick={() => handleNavClick(0)}>
          Installations
            </a>
          </li>
          <li className="nav-item">
          <a className="nav-link" href="#" onClick={() => handleNavClick(1)}>
          IT Support
            </a>
          </li>
          <li className="nav-item">
          <a className="nav-link" href="#" onClick={() => handleNavClick(2)}>
          Remote Access
            </a>
          </li>
          </>
          )}
          {!isHomePage && (
            <>
          <li className="nav-item">
          <Link className="nav-link" to="/">
          Home
            </Link>
          </li>
          </>
          )}
          <li className="nav-item">
            <Link className="nav-link" to="/contact">
              Contact Us
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              About Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
Navbar.propTypes = {
  setCarouselIndex: PropTypes.func.isRequired,
};

export default Navbar;
