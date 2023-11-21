import React from "react";
import "./Suggestions.css";
import { useState } from "react";
import Suggestion from "./Suggestion";

function Suggestions() {
  const suggests = [
    {
      username: "RajiniKanth",
    },
    {
      username: "Mark Zuckerberg",
    },
    {
      username: "Yamunna Ganapathi",
    },
    {
      username: "Elon Musk",
    },
    {
      username: "Trisha Krishnan",
    },
    {
      username: "Shaw Rukh Khan",
    },
    {
      username: "Aira Fathima",
    },
    {
      username: "Karthiga Ravindran",
    },
  ];
  return (
    <div className="suggestions container">
      <div className="suggestions__title">Suggestions to follow</div>
      <div className="suggestions__username ">
        {suggests.map((item) => {
          return <Suggestion item={item} />;
        })}
      </div>
    </div>
  );
}

export default Suggestions;
