import React from "react";
import LogoNavButton from './LogoNavButton.js';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/">
        <LogoNavButton/>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="/installations">
              Installations
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/IT-support">
              IT Support
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/remote-access">
              Remote Access
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/contact">
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
