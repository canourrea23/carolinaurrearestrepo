import React, { useEffect, useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Component } from "react";

import "./App.css";
// import "hamburgers" from "@import path/to/hamburgers";

// import Welcome from './components/Welcome';
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
// import Header from "./components/Header";
import Footer from "./components/Footer";
import SetAside from "./components/SetAside";
import SaveTheBurger from "./components/SaveTheBurger";
import DevJobsUsa from "./components/DevJobsUsa";
import Genocafe from "./components/Genocafe";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container mt-5">
        <div></div>
        <Switch>
          <Route exact path="/" component={Profile} />
          <Route exact path="/SaveTheBurger" component={SaveTheBurger} />
          <Route exact path="/DevJobsUsa" component={DevJobsUsa} />
          <Route exact path="/SetAside" component={SetAside} />
          <Route exact path="/Genocafe" component={Genocafe} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}
export default App;
