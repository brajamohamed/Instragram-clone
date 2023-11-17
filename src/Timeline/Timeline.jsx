import React from "react";
import "./Timeline.css";
import Suggestions from "./Suggestions";
import Post from "./Post/Post";
import Stories from "../Stories/Stories";
const Timeline = () => {
  return (
    <div className="timeline">
      <div className="timeline_left">
        <div className="timeline_top">
          <Stories />
        </div>
        <div className="timeline_bottom">
          <Post />
        </div>
      </div>
      <div className="timeline_right">
        <Suggestions />
      </div>
    </div>
  );
};

export default Timeline;
