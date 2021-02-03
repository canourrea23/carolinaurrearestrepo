import React from "react";
import { Transition } from "react-transition-group";

const SetAside = () => {
  return (
    <div>
      <a href="skincare.html" className="project-arrow back">
        <i class="fas fa-caret-left"></i>
      </a>
      <a href="SaveTheBurger" class="project-arrow forward">
        <i class="fas fa-caret-right"></i>
      </a>
      <div class="section portfolio">
        <h1>SetAside</h1>
        <div className="subtext">
          <h5>
            <b>React.js, MongoDB, Mongoose, Node.js, Express.js</b>
          </h5>
          <h5>
            <b>Role:</b> Front and Back End Developer
          </h5>
          <h5>
            <b>Team:</b>{" "}
            <a href="https://github.com/CoreyWilson319">Corey Wilson</a> ,{" "}
            <a href="https://github.com/wjlock" target="_blank">
              Will Lock
            </a>{" "}
            and{" "}
            <a href="https://github.com/zfinnan" target="_blank">
              Zach Finnan
            </a>
          </h5>
          <hr />
        </div>
        <div className="button">
          <a href="https://set-aside.herokuapp.com/" target="_blank">
            Live Site
          </a>
          <a href="https://github.com/wjlock/SetAside-frontend" target="_blank">
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
        <div class="portfolio-images">
          <a href="https://set-aside.herokuapp.com/" target="_blank">
            <img
              src="https://res.cloudinary.com/carolinaurrea/image/upload/v1612311270/Screen_Shot_2021-02-02_at_7.13.03_PM_ct7pno.png"
              alt="SetAside homepage"
            ></img>
          </a>
        </div>
        <div class="portfolio-images" style={{ paddingTop: "10px" }}>
          <a href="https://set-aside.herokuapp.com/" target="_blank">
            <img
              src="https://res.cloudinary.com/carolinaurrea/image/upload/v1612311253/Screen_Shot_2021-02-02_at_7.13.54_PM_ymosrl.png"
              alt="SetAside homepage"
            ></img>
          </a>
        </div>
      </div>
    </div>
  );
};
export default SetAside;
