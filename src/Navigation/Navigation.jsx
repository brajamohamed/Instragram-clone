import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./Navigation.css";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import ExploreIcon from "@mui/icons-material/Explore";
import MovieFilterIcon from "@mui/icons-material/MovieFilter";
import SendIcon from "@mui/icons-material/Send";
import TelegramIcon from "@mui/icons-material/Telegram";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import SettingsIcon from "@mui/icons-material/Settings";
import MonitorHeartIcon from "@mui/icons-material/MonitorHeart";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ModeNightIcon from "@mui/icons-material/ModeNight";
import ReportGmailerrorredIcon from "@mui/icons-material/ReportGmailerrorred";
import InstaNameLogo from "./instagram-logo-white-text-black-background.png";
import { Link } from "react-router-dom";
const Navigation = ({ setCreate, setSearch, setLoggedIn }) => {
  const handleCreate = () => {
    setCreate(true);
  };
  return (
    <div className="sideNavbar">
      <div
        class="offcanvas offcanvas-start show navbar"
        data-bs-scroll="true"
        data-bs-backdrop="true"
        tabindex="-1"
        id="menu"
      >
        <div class="offcanvas-header mt-4">
          <h5 class="offcanvas-title bg-white" id="menuLabel">
            <img src={InstaNameLogo} alt="insta-name-logo" id="nav-inta-icon" />
          </h5>
          {/* <button
            type="button"
            className="btn-close text-white bg-white"
            data-bs-dismiss="offcanvas"
            data-bs-target="#menu"
          ></button> */}
        </div>
        <div class="offcanvas-body">
          <ul>
            <li>
              <Link to="/">
                <HomeIcon className="me-2" />
                Home
              </Link>
            </li>

            <li>
              <Link type="button" onClick={() => setSearch(true)}>
                <SearchIcon className="me-2" />
                Search
              </Link>
            </li>

            <li>
              <Link to="/explore">
                <ExploreIcon className="me-2" />
                Explore
              </Link>
            </li>

            <li>
              <Link to="/">
                <MovieFilterIcon className="me-2" />
                Reels
              </Link>
            </li>

            <li>
              <Link to="/">
                <TelegramIcon className="me-2" />
                Message
              </Link>
            </li>

            <li>
              <Link to="/">
                <FavoriteBorderIcon className="me-2" />
                Notification
              </Link>
            </li>

            <li>
              <Link to="/" type="button" onClick={handleCreate}>
                <ControlPointIcon className="me-2" />
                Create
              </Link>
            </li>
            <div className="dropup profile-section">
              <button
                className="btn text-white dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
              >
                <MenuIcon className="me-2" />
                More
              </button>
              <ul className="dropdown-menu">
                <li>
                  <Link to="">
                    <SettingsIcon className="me-2" />
                    Settings
                  </Link>
                </li>
                <li>
                  <Link to="">
                    <MonitorHeartIcon className="me-2" />
                    Your Activity
                  </Link>
                </li>
                <li>
                  <Link to="">
                    <BookmarkBorderIcon className="me-2" />
                    Saved
                  </Link>
                </li>
                <li>
                  <Link to="">
                    <ModeNightIcon className="me-2" />
                    Switch appearance
                  </Link>
                </li>
                <li>
                  <Link to="">
                    <ReportGmailerrorredIcon className="me-2" />
                    Report a problem
                  </Link>
                </li>
                <li>
                  <Link to="">Switch accounts</Link>
                </li>
                <li>
                  <Link to="" type="button" onClick={() => setLoggedIn(false)}>
                    Log out
                  </Link>
                </li>
              </ul>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
