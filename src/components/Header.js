import { React } from "react";

const Header = () => {
  return (
    <div>
      <div className="header-background">
        <header id="top">
          <div className='header-con'>
            <div className="header-content">
              <h1 className="header-name" style={{ marginTop: "-200" }}>
                Carolina<br></br>Urrea Restrepo
              </h1>
              <br></br>
              <h4 className="header-subhead">Software Engineer</h4>
              <a href="#about-me" className="green-arrow">
                <img src="https://res.cloudinary.com/carolinaurrea/image/upload/v1612315364/arrow_fggayr.png" />
              </a>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Header;
