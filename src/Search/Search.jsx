import React from "react";
import "./Search.css";
import { useState, useEffect } from "react";
import { useRef } from "react";
const Search = ({ setSearch }) => {
  const searchRef = useRef();
  const [searchText, setSearchText] = useState("");
  const [filter, setFilter] = useState([]);
  const handleSearchBarClose = () => {
    setSearch(false);
  };
  const handleSearchText = () => {
    setSearchText(searchRef.current.value);
  };
  useEffect(() => {
    setFilter(
      userNames.filter((userName) => {
        userName = userName.toLowerCase();
        return userName.includes(searchText) ? userName : null;
      })
    );
  }, [searchText]);
  useEffect(() => {}, [filter]);
  const userNames = [
    "Rohit Sharma",
    "Suresh Raina",
    "Mohammed Shami",
    "Jasprit Bumrah",
    "Siraj Mohammed",
    "Sachin Tendulkar",
    "Sara Tendulkar",
    "Ricky Pointing",
    "Mahendra Singh Dhoni",
    "Priya Bhavani Shankar",
    "Karthiga Ravindaran",
    "Yamunna Ganapathi",
    "Trisha Krishnan",
    "Madonna Sebastian",
    "Vijay Sethupathi",
    "RajiniKanth",
    "Virendar Shewag",
    "Gautam Gambhir",
    "Rahul Gandhi",
    "Narendra Modi",
    "MK Stalin",
  ];
  return (
    <div className="searchBarOffcanvas ">
      <div
        class="offcanvas offcanvas-start show text-bg-dark"
        tabindex="-1"
        id="offcanvas"
        aria-labelledby="offcanvasLabel"
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title ms-2" id="offcanvasLabel">
            Search Users
          </h5>
          <button
            type="button"
            class="btn-close btn-close-white"
            onClick={handleSearchBarClose}
          ></button>
        </div>
        <div class="offcanvas-body">
          <div className="form">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="search..."
                onChange={handleSearchText}
                value={searchText}
                ref={searchRef}
              />
            </div>
          </div>
          {searchText &&
            filter.map((user) => (
              <div className="searchResult">
                {user} <hr />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
