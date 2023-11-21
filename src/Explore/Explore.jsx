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
    <div className="exploreContainer container-md mt-5">
      {videos.map((video) => {
        return (
          <div className="reel">
            <iframe
              width="400"
              height="400"
              src={video.url}
              title="G pay account open Tamil 💴💵💰 | #shorts #tamil"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <div></div>
          </div>
        );
      })}
    </div>
  );
};

export default Explore;
