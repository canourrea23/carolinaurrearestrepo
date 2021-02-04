import React from "react";
import { Transition } from "react-transition-group";

const Genocafe = () => {
  return (
    <div>
      <a href="/DevJobsUsa" className="project-arrow back">
        <i class="fas fa-caret-left"></i>
      </a>
      <a href="/SetAside" class="project-arrow forward">
        <i class="fas fa-caret-right"></i>
      </a>
      <div class="section portfolio">
        <h1>Genocafe</h1>
        <div className="subtext">
          <h5>
            <b>React.js, PostgreSQL, Django, Python3</b>
          </h5>
          <h5>
            <b>Role:</b> Front and Back End Developer
          </h5>
          <hr />
        </div>
        <div className="button">
          <a
            href="https://canourrea23.github.io/genocafe-client"
            target="_blank"
          >
            Live Site
          </a>
          <a href="https://genocafe-client.herokuapp.com/" target="_blank">
            Github
          </a>
          <p>
            Dreamstate is an interactive MERN application that enables users to
            understand their dreams through data visualizations and keyword
            analysis.
          </p>
          <p>
            Our objective was to provide engaging dream analysis with as minimal
            input as possible from the user. Working with the AWS Sentiment API,
            data scraping, and Recharts, we created a framework that provides
            data visuals of individual dreams, sentiment over time, and commonly
            occurring symbols in the user's dreams.
          </p>
          <p>
            My primary contributions to this project were concepting the overall
            design direction, front end and responsive development, data
            scraping, and implementing CRUD routes through React and Mongo. Our
            group practiced pair programming in the initial sprint and managed
            workloads through Trello on subsequent sprints.
          </p>
        </div>
        <div class="portfolio-images" style={{ border: "1px solid #81b29a" }}>
          <a
            href="https://github.com/canourrea23/genocafe-client"
            target="_blank"
          >
            <img
              src="https://res.cloudinary.com/carolinaurrea/image/upload/v1612362972/Screen_Shot_2021-02-03_at_9.36.01_AM_vhpptq.png"
              alt="Home Page"
            ></img>
          </a>
        </div>
        <div
          class="portfolio-images"
          style={{ paddingTop: "10px", border: "1px solid #81b29a" }}
        >
          <a href="https://github.com/canourrea23/genocafe">
            <img
              src="https://res.cloudinary.com/carolinaurrea/image/upload/v1612362801/Screen_Shot_2021-02-03_at_9.33.13_AM_g4lcd4.png"
              alt="Django backend"
            ></img>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Genocafe;