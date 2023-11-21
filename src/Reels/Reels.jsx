import React from "react";
import "./Reels.css";

import Reel from "./Reel";

const Reels = ({ videos }) => {
  return (
    <div className="reels-container container d-flex flex-column align-items-center">
      {videos.map((video) => {
        return <Reel video={video} />;
      })}
    </div>
  );
};

export default Reels;
