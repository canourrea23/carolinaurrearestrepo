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
          href="https://drive.google.com/file/d/1R78Eqyq4KsS4vB4q6hGF4TxzUIFFPnn3/view?usp=sharing"
          target="_blank"
          className="nav-resume nav-desktop"
        >
          Resume
        </a>
        {/* <button className="hamburger hamburger--Squeeze" type="button">
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button> */}
      </div>
      <div className="nav-responsive" id="navbarToggleExternalContent">
        <a href="#about" className="nav-desktop">
          About
        </a>
        <a href="#featured-projects" className="nav-desktop">
          Projects
        </a>
        <a href="#contact" className="nav-desktop">
          <img src="https://res.cloudinary.com/carolinaurrea/image/upload/v1612315364/arrow_fggayr.png" />
          Contact
        </a>
        <a
          href="https://drive.google.com/file/d/1cpn2IPA4zX1LV0X6aWpthyKLNtiClAgv/view?usp=sharing"
          target="_blank"
        >
          Resume
        </a>
        <a
          href="https://github.com/canourrea23"
          target="_blank"
          className="nav-contact"
        >
          <i className="fab fa-github fa-lg"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/carolina-urrea-restrepo"
          className="nav-contact"
          target="_blank"
        >
          <i className="fab fa-linkedin fa-lg"></i>
        </a>
      </div>
    </nav>
  );
};
export default Navbar;
