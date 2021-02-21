import React from "react";
// import { Transition } from "react-transition-group";

const SetAside = () => {
  return (
    <div>
      <a href="/Genocafe" className="project-arrow back">
        <i class="fas fa-caret-left"></i>
      </a>
      <a href="/SaveTheBurger" class="project-arrow forward">
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
            We wanted to make an everyday tracker for your finances. A quick and
            interactional App that can show you how your personalized goals are
            going with a weekly or monthly update. We have intuitive graphs and
            tables to make it easy and fun to show your progress and SetAside.
          </p>
          <p>
            SetAside is an intuitive web app for easily tracking your finances.
            Upon sign-up, users can set a goal and create a budget, then add
            expenses as they come in. Built-in graphs show users how much
            they’ve spent compared to what they initially budgeted, and monthly
            breakdowns provide details around their current progress.
          </p>
          <p>
            My primary contributions to the project were overseeing the app’s
            authorization feature and finding engaging, visual ways to display
            users’ spending and progression.
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
