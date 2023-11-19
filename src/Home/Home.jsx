import React from "react";
import "./Home.css";
import Navigation from "../Navigation/Navigation";
import Timeline from "../Timeline/Timeline";
import { useState, useEffect } from "react";
import SmallBar from "../Navigation/SmallBar";
const Home = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1200);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="container-fluid home">
      <div className="row">
        <div className="navigation-item col-xl-3 col-lg-1">
          {isSmallScreen ? <SmallBar /> : <Navigation />}
        </div>
        <div className="timeline-item col-xl-9 col-lg-11">
          <Timeline />
        </div>
      </div>
    </div>
  );
};

export default Home;
