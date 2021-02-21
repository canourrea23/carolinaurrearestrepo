import React from "react";
import { Transition } from "react-transition-group";

const SaveTheBurger = () => {
  return (
    <div>
      <a href="/Genocafe" className="project-arrow back">
        <i class="fas fa-caret-left"></i>
      </a>
      <a href="/DevJobsUsa" class="project-arrow forward">
        <i class="fas fa-caret-right"></i>
      </a>
      <div class="section portfolio">
        <h1>Save The Burger</h1>
        <div className="subtext">
          <h5>
            <b>React.js, MongoDB, Mongoose, Node.js, Express.js</b>
          </h5>
          <h5>
            <b>Role:</b> Front and Back End Developer
          </h5>
          <hr />
        </div>
        <div className="button">
          <a href="https://canourrea23.github.io/" target="_blank">
            Live Site
          </a>
          <a
            href="https://github.com/canourrea23/save-the-burger"
            target="_blank"
          >
            Github
          </a>
          <p>
            Save the Burger is a platform game platform game with win and lose
            conditions. The whole game was done in HTML, CSS Canvas, and
            JavaScript.
          </p>
          <p>
            Save the Burger is a video game inspired by classic games like Space
            Invaders and Centipede, but with a new and exciting twist. It was
            built using HTML, CSS, Canvas, and JavaScript.
          </p>
          {/* <p>
            My primary contributions to this project were concepting the overall
            design direction, front end and responsive development, data
            scraping, and implementing CRUD routes through React and Mongo. Our
            group practiced pair programming in the initial sprint and managed
            workloads through Trello on subsequent sprints.
          </p> */}
        </div>
        <div class="portfolio-images">
          <a
            href="https://github.com/canourrea23/save-the-burger"
            target="_blank"
          >
            <img
              src="https://res.cloudinary.com/carolinaurrea/image/upload/v1612323729/Screen_Shot_2021-02-02_at_10.41.42_PM_wicppu.png"
              alt="Before start"
            ></img>
          </a>
        </div>
        <div class="portfolio-images" style={{ paddingTop: "5px" }}>
          <a href="https://res.cloudinary.com/carolinaurrea/image/upload/v1612323816/Screen_Shot_2021-02-02_at_10.42.58_PM_mqattu.png">
            <img
              src="https://res.cloudinary.com/carolinaurrea/image/upload/v1612323816/Screen_Shot_2021-02-02_at_10.42.58_PM_mqattu.png"
              alt="Once playing"
            ></img>
          </a>
        </div>
      </div>
    </div>
  );
};
export default SaveTheBurger;
