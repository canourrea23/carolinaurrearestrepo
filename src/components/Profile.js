import { Transition, CSSTransition } from "react-transition-group";
import React from "react";
import Header from "./Header";

const Profile = () => {
  return (
    // About
    <div>
      <Header />
      <div>
        <div className="section" id="about">
          <div className="flex-grid nowrap">
            <div className="about-item headshot">
              <img
                className="transition"
                src="https://res.cloudinary.com/carolinaurrea/image/upload/v1612242347/21768368_10155656561105135_6851518363378484130_n_uhs70f.jpg"
                alt="carolina"
              />
            </div>
            {/* <div className="about-item summary transition"></div> */}
            <div className="about-item summary">
              <h2 className="transition">
                A Software Engineer never shying away from any opportunity that
                has come my way.
              </h2>
              <hr />
              <p>
                I have years of experience with customer service, training new
                hires, and managing tasks to enable proficiency. I have a range
                of skills from low-level assembly programming through to high
                level & scripting languages.
              </p>
              <p>
                I like to spend my time outside of programming with traveling.
              </p>
            </div>
          </div>
        </div>
        <div className="arrow-right" />
      </div>
      {/* <!-- Skills --> */}
      <div className="section" id="skills">
        <div className="skills grid">
          <div className="about-item skills">
            <h5>Front End</h5>
            <ul>
              <li>HTML</li>
              <li>CSS / SCSS</li>
              <li>JavaScript</li>
              <li>jQuery</li>
              <li>React.js</li>
            </ul>
          </div>
          <div className="about-item skills">
            <h5>Framework & Templating</h5>
            <ul>
              <li>Mern</li>
              <li>React</li>
              <li>EJS</li>
            </ul>
          </div>
          <div className="about-item skills">
            <h5>Back End</h5>
            <ul>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>PostgreSQL</li>
              <li>MongoDB</li>
              <li>Django</li>
              <li>Python</li>
            </ul>
          </div>
          <div className="about-item skills">
            <h5>Version Control</h5>
            <ul>
              <li>Git</li>
              <li>Github</li>
            </ul>
          </div>
          <div className="about-item skills">
            <h5>Test & Deployment</h5>
            <ul>
              <li>Chai / Mocha</li>
              <li>Heroku</li>
            </ul>
          </div>
          <div className="about-item skills">
            <h5>Design Tools</h5>
            <ul>
              <li>Adobe Photoshop</li>
            </ul>
          </div>
        </div>
      </div>
      {/* <!-- Projects --> */}
      <div className="section" id="featured-projects">
        <h2>Featured Projects</h2>
        <hr />
        <div className="flex-grid">
          <div>
            <div className="portfolio-item plant">
              <a href="/SaveTheBurger" alt="Plant Parenthood">
                <div className="portfolio-text">
                  <h3>Save the Burger</h3>
                  <h5>HTML | jQuery | JavaScript | HTML Canvas</h5>
                </div>
              </a>
            </div>
          </div>
          <div>
            <div className="portfolio-item skincare">
              <a href="/DevJobsUsa" alt="Dev Jobs">
                <div className="portfolio-text">
                  <h3>Job Dev USA</h3>
                  <h5>JavaScript | Sequelize | Node | Data Scrapping</h5>
                </div>
              </a>
            </div>
          </div>
          <div>
            <div className="portfolio-item dream">
              <a exact href="/SetAside" alt="SetAside">
                <div className="portfolio-text">
                  {/* <h3>SetAside</h3> */}
                  <h5>React | MongoDB | Node | Data Visualization</h5>
                </div>
              </a>
            </div>
          </div>
          <div>
            <div className="portfolio-item blackjack">
              <a href="/Genocafe" alt="genocafe">
                <div className="portfolio-text">
                  <h3>Genocafe</h3>
                  <h5>React | Django | Python | JavaScript</h5>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Profile;


function double(numbers) {
  
}