import { Transition, CSSTransition } from 'react-transition-group';
import React from 'react';

const Profile = () => {
    return (
        
        // About
        <div>
        <div>
            <div className="section" id="about">
                <div className="flex-grid nowrap">
                    <div className="about-item headshot">
                        <img src="https://res.cloudinary.com/carolinaurrea/image/upload/v1612242347/21768368_10155656561105135_6851518363378484130_n_uhs70f.jpg" alt="carolina"/>
                    </div>
                    {/* <div className="about-item summary transition"></div> */}
                    <div className="about-item summary">
                        <h2>I’m a front end developer with a deep appreciation for the design process.</h2>
                        <hr/>
                        <p>With over six years of agency experience in a variety of roles, I understand what it takes for cross-functional teams to be successful. Currently, I'm a web developer at <a href="http://www.smartsheet.com" target="_blank">Smartsheet</a> supporting the demand generation team.</p>
                        <p>When I’m not coding, you can find me practicing photography and tending to my growing collection of <a href="plant-parenthood.html">houseplants</a>.</p>
                    </div>
                </div>
            </div>
            <div className="arrow-right"/>
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
                <hr/>
                <div className="flex-grid">
                    <div className="portfolio-item plant">
                        <a href="/SaveTheBurger" alt="Plant Parenthood"></a>
                        <div className="portfolio-text">
                            <h3>Save the Burger</h3>
                            <h5>HTML | jQuery | JavaScript | HTML Canvas</h5>
                        </div>
                    </div>
                    <div className="portfolio-item skincare">
                        <a href="/DevJobsUsa" alt="Dev Jobs"></a>
                        <div className="portfolio-text">
                            <h3>Job Dev USA</h3>
                            <h5>JavaScript | Sequelize | Node | Data Scrapping</h5>
                        </div>
                    </div>
                    <div className="portfolio-item dream">
                        <a href="/SetAside" alt="SetAside"></a>
                        <div className="portfolio-text">
                            {/* <h3>SetAside</h3> */}
                            <h5 style={{marginTop: "15%"}}>React | MongoDB | Node | Data Visualization</h5>
                        </div>
                    </div>
                    <div className="portfolio-item blackjack">
                        <a href="blackjack.html" alt="Plant Parenthood"></a>
                        <div className="portfolio-text">
                            <h3>Genocafe</h3>
                            <h5>React | Django | Python | JavaScript</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default Profile;