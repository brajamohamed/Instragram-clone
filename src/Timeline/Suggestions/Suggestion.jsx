import React from "react";
import "./Suggestion.css";
import { Avatar } from "@mui/material";
import { useState } from "react";

const Suggestion = ({ item }) => {
  const [follow, setFollow] = useState(false);
  const handleFollow = () => {
    setFollow(!follow);
  };

  return (
    <div>
      <div className="username__left">
        <span className="avatar">
          <Avatar>{item.username.charAt(0).toUpperCase()}</Avatar>
        </span>
        <div className="username__info">
          <span className="username">{item.username}</span>
          <span className="relation">New to Instagram</span>
        </div>
      </div>
      <button className="follow__button" onClick={() => handleFollow()}>
        {follow ? "Following" : "Follow"}
      </button>
    </div>
  );
};

export default Suggestion;
