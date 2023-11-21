import React from "react";
import "./Explore.css";
import Navigation from "../Navigation/Navigation";
import SmallBar from "../Navigation/SmallBar";
import { useState, useEffect } from "react";
const Explore = ({ videos, setCreate }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);
  const [search, setSearch] = useState(false);

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
    <div className="exploreContainer">
      <div className="navigation-item col-xl-2 col-lg-1">
        {isSmallScreen ? (
          <SmallBar setCreate={setCreate} setSearch={setSearch} />
        ) : (
          <Navigation setCreate={setCreate} setSearch={setSearch} />
        )}
      </div>
      {videos.map((video) => (
        <iframe
          className="reel"
          width="560"
          height="315"
          src={video.url}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      ))}
    </div>
  );
};

export default Explore;
