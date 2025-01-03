import React from "react";
import { useLocation } from "react-router-dom";
import LogoNavButton from './LogoNavButton.js';

const Navbar = ({ setCarouselIndex }) => {
  const location = useLocation();

  const handleNavClick = (slideIndex) => {
    setCarouselIndex(slideIndex);
  };

  const isHomePage = location.pathname === "/";//if not home page then do not show carousel options

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/">
        <LogoNavButton/>
      </a>
      {/* <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button> */}

      <div>
        <ul className="navbar-nav">
          {isHomePage && (
            <>
          <li className="nav-item active">
          <a className="nav-link" onClick={() => handleNavClick(0)}>
          Installations
            </a>
          </li>
          <li className="nav-item">
          <a className="nav-link"  onClick={() => handleNavClick(1)}>
          IT Support
            </a>
          </li>
          <li className="nav-item">
          <a className="nav-link" onClick={() => handleNavClick(2)}>
          Remote Access
            </a>
          </li>
          </>
          )}
          {!isHomePage && (
            <>
          <li className="nav-item">
          <a className="nav-link" href="/">
          Home
            </a>
          </li>
          </>
          )}
          <li className="nav-item">
            <a className="nav-link" href="/contact">
              Contact Us
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/about">
              About Us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
