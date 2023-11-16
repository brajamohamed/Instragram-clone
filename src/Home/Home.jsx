import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./Home.css";
const Home = () => {
  return (
    <div>
      <button
        className="btn btn-info"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#menu"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div class="offcanvas offcanvas-start" tabindex="-1" id="menu">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="menuLabel">
            Instagram
          </h5>
        </div>
        <div class="offcanvas-body">
          <ul>
            <li>
              <a href="">Home</a>
            </li>

            <li>
              <a href="/">Search</a>
            </li>

            <li>
              <a href="/">explore</a>
            </li>

            <li>
              <a href="/">Reels</a>
            </li>

            <li>
              <a href="/">Message</a>
            </li>

            <li>
              <a href="/">Notification</a>
            </li>

            <li>
              <a href="/">Create</a>
            </li>

            <li>
              <a href="/">Profile</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
