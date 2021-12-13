import React from "react";

const Footer = () => {
  return (
    <footer id="contact">
      <div className="footer-content">
        <h4>Let's get in touch.</h4>
        <p>
          <a href="https://github.com/canourrea23" target="_blank">
            <i className="fab fa-github fa-lg"></i>{" "}
            <span className="icon-label">canourrea23</span>
          </a>
        </p>
        <p>
          <a
            href="https://www.linkedin.com/in/carolina-urrea-restrepo/"
            target="_blank"
          >
            <i className="fab fa-linkedin fa-lg"></i>{" "}
            <span className="icon-label">Carolina Urrea Restrepo</span>
          </a>
        </p>
        <p>
          <a href="mailto:curestrepo@gmail.com">
            <i className="fas fa-envelope fa-lg"></i>{" "}
            <span className="icon-label">curestrepo@gmail.com</span>
          </a>
        </p>
        <p>
          <a
            href="https://docs.google.com/document/d/1enc04qe6wi_nDjBrccVhUTQ9pvLLXn3m2hLDZkEL5AM/edit?usp=sharing"
            target="_blank"
          >
            <i className="fas fa-file-alt fa-lg"></i>{" "}
            <span className="icon-label">Download Resume</span>
          </a>
        </p>
      </div>
    </footer>
  );
};
export default Footer;
