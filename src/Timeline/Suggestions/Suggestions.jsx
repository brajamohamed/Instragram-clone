import { Avatar } from "@mui/material";
import React from "react";
import "./Suggestions.css";
import { useState } from "react";

function Suggestions() {
  const [follow, setFollow] = useState(false);
  const handleFollow = () => {
    setFollow(!follow);
  };
  return (
    <div className="suggestions">
      <div className="suggestions__title">Suggestions to follow</div>
      <div className="suggestions__usernames">
        <div className="suggestions__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar>R</Avatar>
            </span>
            <div className="username__info">
              <span className="username">RajiniKanth</span>
              <span className="relation">New to Instagram</span>
            </div>
          </div>
          <button className="follow__button" onClick={() => handleFollow()}>
            {follow ? "Following" : "Follow"}
          </button>
        </div>

        <div className="suggestions__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar>R</Avatar>
            </span>
            <div className="username__info">
              <span className="username">Mark Zuckerberg</span>
              <span className="relation">New to Instagram</span>
            </div>
          </div>
          <button className="follow__button" onClick={handleFollow}>
            {follow ? "Following" : "Follow"}
          </button>
        </div>

        <div className="suggestions__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar>R</Avatar>
            </span>
            <div className="username__info">
              <span className="username">Yamunna Ganapathi</span>
              <span className="relation">New to Instagram</span>
            </div>
          </div>
          <button className="follow__button" onClick={handleFollow}>
            {follow ? "Following" : "Follow"}
          </button>
        </div>

        <div className="suggestions__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar>R</Avatar>
            </span>
            <div className="username__info">
              <span className="username">Elon Musk</span>
              <span className="relation">New to Instagram</span>
            </div>
          </div>
          <button className="follow__button" onClick={handleFollow}>
            {follow ? "Following" : "Follow"}
          </button>
        </div>
        <div className="suggestions__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar>R</Avatar>
            </span>
            <div className="username__info">
              <span className="username">Trisha Krishnan</span>
              <span className="relation">New to Instagram</span>
            </div>
          </div>
          <button className="follow__button" onClick={handleFollow}>
            {follow ? "Following" : "Follow"}
          </button>
        </div>
        <div className="suggestions__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar>R</Avatar>
            </span>
            <div className="username__info">
              <span className="username">Shaj Rukh Khan</span>
              <span className="relation">New to Instagram</span>
            </div>
          </div>
          <button className="follow__button" onClick={handleFollow}>
            {follow ? "Following" : "Follow"}
          </button>
        </div>
        <div className="suggestions__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar>R</Avatar>
            </span>
            <div className="username__info">
              <span className="username">Aira Fathima</span>
              <span className="relation">New to Instagram</span>
            </div>
          </div>
          <button className="follow__button" onClick={handleFollow}>
            {follow ? "Following" : "Follow"}
          </button>
        </div>
        <div className="suggestions__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar>R</Avatar>
            </span>
            <div className="username__info">
              <span className="username">Karthiga Ravindran</span>
              <span className="relation">New to Instagram</span>
            </div>
          </div>
          <button className="follow__button" onClick={handleFollow}>
            {follow ? "Following" : "Follow"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Suggestions;
