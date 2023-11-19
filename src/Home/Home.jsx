import React from "react";
import "./Home.css";
import Navigation from "../Navigation/Navigation";
import Timeline from "../Timeline/Timeline";

const Home = () => {
  return (
    <div className="container-fluid home">
      <div className="row">
        <div className="navigation-item col-xl-3">
          <Navigation />
        </div>
        <div className="timeline-item col-xl-9">
          <Timeline />
        </div>
      </div>
    </div>
  );
};

export default Home;
