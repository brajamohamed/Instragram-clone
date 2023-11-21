import React from "react";
import "./Home.css";
import Navigation from "../Navigation/Navigation";
import Timeline from "../Timeline/Timeline";
import { useState, useEffect } from "react";
import SmallBar from "../Navigation/SmallBar";
import Search from "../Search/Search";
const Home = ({ posts, setPosts, setCreate }) => {
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
    <div className="container-fluid home">
      <div className="row">
        <div className="navigation-item col-xl-2 col-lg-1">
          {isSmallScreen ? (
            <SmallBar setCreate={setCreate} setSearch={setSearch} />
          ) : (
            <Navigation setCreate={setCreate} setSearch={setSearch} />
          )}
        </div>
        <div className="timeline-item col-xl-10 col-lg-11">
          <Timeline posts={posts} setPosts={setPosts} />
        </div>
      </div>
      {search && <Search setSearch={setSearch} />}
    </div>
  );
};

export default Home;
