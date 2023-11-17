import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./Home.css";
import Navigation from "../Navigation/Navigation";
import Timeline from "../Timeline/Timeline";
const Home = () => {
  return (
    <div className="homePage">
      <div className="navigation_item">
        <Navigation />
      </div>
      <div className="timeline_item">
        <Timeline />
      </div>
    </div>
  );
};

export default Home;
