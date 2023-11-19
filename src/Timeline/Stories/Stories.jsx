import React from "react";
import "./Stories.css";
import Story from "./Story/Story";

const Stories = () => {
  return (
    <div className="story-section mt-5">
      <Story />
      <Story />
      <Story />
      <Story />
    </div>
  );
};

export default Stories;
