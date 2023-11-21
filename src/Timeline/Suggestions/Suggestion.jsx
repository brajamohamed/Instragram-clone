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
    <div className="row mb-3">
      <div className="username__left col-8">
        <span className="avatar me-2">
          <Avatar>{item.username.charAt(0).toUpperCase()}</Avatar>
        </span>
        <div className="username__info">
          <span className="username">{item.username}</span>
          <span className="relation">New to Instagram</span>
        </div>
      </div>
      <div className="col-4">
        <button className="follow__button" onClick={() => handleFollow()}>
          {follow ? "Following" : "Follow"}
        </button>
      </div>
    </div>
  );
};

export default Suggestion;
