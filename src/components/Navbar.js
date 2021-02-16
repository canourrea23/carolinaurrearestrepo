import React from "react";
import { nav } from "react-router-dom";
// import "../hamburgers.scss"

const Navbar = (props) => {
  return (
    <nav className="nav-home">
      <div className="nav-left">
        <a href="/" className="nav-logo" title="Home">
          CURES
        </a>
      </div>
      <div className="nav-right">
        <a href="#about" className="nav-desktop">
          About
        </a>
        <a href="#featured-projects" className="nav-desktop">
          Projects
        </a>
        <a href="#contact" className="nav-desktop">
          Contact
        </a>
        <a
          href="https://drive.google.com/file/d/1qF-50shrIvfjOtvAbU-cyDfjSUAy6kLT/view"
          target="_blank"
          className="nav-resume nav-desktop"
        >
          Resume
        </a>
        <button className="hamburger hamburger--Squeeze" type="button">
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>
      </div>
      <div className="nav-responsive">
        <a href="#about" className="nav-desktop">
          About
        </a>
        <a href="#featured-projects" className="nav-desktop">
          Projects
        </a>
        <a href="#contact" className="nav-desktop">
          Contact
        </a>
        <a href="img/Jacquelyn_Marcella_Resume.pdf" target="_blank">
          Resume
        </a>
        <a
          href="https://github.com/jacquelynmarcella"
          target="_blank"
          className="nav-contact"
        >
          <i className="fab fa-github fa-lg"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/jmarcella/"
          target="_blank"
          className="nav-contact"
        >
          <i className="fab fa-linkedin fa-lg"></i>
        </a>
      </div>
    </nav>
  );
};
export default Navbar;
