import React from "react";
import { Transition } from "react-transition-group";

const DevJobsUsa = () => {
  return (
    <div>
      <a href="/SetAside" className="project-arrow back">
        <i class="fas fa-caret-left"></i>
      </a>
      <a href="/Genocafe" class="project-arrow forward">
        <i class="fas fa-caret-right"></i>
      </a>
      <div class="section portfolio">
        <h1>Dev Jobs USA</h1>
        <div className="subtext">
          <h5>
            <b>JavaScript, PostgreSQL , Sequelize, Node.js, Express.js</b>
          </h5>
          <h5>
            <b>Role:</b> Front and Back End Developer
          </h5>
          <hr />
        </div>
        <div className="button">
          <a href="https://jobs-for-developers.herokuapp.com/" target="_blank">
            Live Site
          </a>
          <a href="https://github.com/canourrea23/dev_jobs_usa" target="_blank">
            Github
          </a>
          <p>
            This website is to be informative data for developers who are
            considering to relocate for a job. They can factor different points
            of cost of living to make an informed decision.
          </p>
          <p>
            My contributions to the project included establishing the overall
            design direction, front end development, data scraping, and
            implementing CRUD routes via React and Sequelize.
          </p>
        </div>
        <div class="portfolio-images" style={{ border: "1px solid #81b29a" }}>
          <a href="https://github.com/canourrea23/dev_jobs_usa" target="_blank">
            <img
              src="https://res.cloudinary.com/carolinaurrea/image/upload/v1612325632/Screen_Shot_2021-02-02_at_11.11.19_PM_kcvzyh.png"
              alt="Profile page"
            ></img>
          </a>
        </div>
        <div
          class="portfolio-images"
          style={{ paddingTop: "10px", border: "1px solid #81b29a" }}
        >
          <a href="https://github.com/canourrea23/dev_jobs_usa">
            <img
              src="https://res.cloudinary.com/carolinaurrea/image/upload/v1612325622/Screen_Shot_2021-02-02_at_11.11.31_PM_s2mmiq.png"
              alt="Selected city"
            ></img>
          </a>
        </div>
      </div>
    </div>
  );
};
export default DevJobsUsa;
