import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./SmallBar.css";
import "./Navigation.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import ExploreIcon from "@mui/icons-material/Explore";
import MovieFilterIcon from "@mui/icons-material/MovieFilter";
import TelegramIcon from "@mui/icons-material/Telegram";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import SettingsIcon from "@mui/icons-material/Settings";
import MonitorHeartIcon from "@mui/icons-material/MonitorHeart";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ModeNightIcon from "@mui/icons-material/ModeNight";
import ReportGmailerrorredIcon from "@mui/icons-material/ReportGmailerrorred";
import { Link } from "react-router-dom";
const SmallBar = () => {
  return (
    <div className="sideSmallbar">
      <div
        class="offcanvas offcanvas-start show smallbar"
        data-bs-scroll="true"
        data-bs-backdrop="false"
        tabindex="-1"
        id="smallMenu"
      >
        <div class="header mt-4 mb-4">
          <Link to="" class="offcanvas-title" id="menuLabel">
            <InstagramIcon className="small-icon" />
          </Link>
        </div>
        <div class="offcanvas-body">
          <ul>
            <li>
              <Link to="/">
                <HomeIcon className="small-icon" />
              </Link>
            </li>

            <li>
              <Link to="/">
                <SearchIcon className="small-icon" />
              </Link>
            </li>

            <li>
              <Link to="/">
                <ExploreIcon className="small-icon" />
              </Link>
            </li>

            <li>
              <Link to="/">
                <MovieFilterIcon className="small-icon" />
              </Link>
            </li>

            <li>
              <Link to="/">
                <TelegramIcon className="small-icon" />
              </Link>
            </li>

            <li>
              <Link to="/">
                <FavoriteBorderIcon className="small-icon" />
              </Link>
            </li>

            <li>
              <Link to="/">
                <ControlPointIcon className="small-icon" />
              </Link>
            </li>
            <div className="dropup profile-section">
              <button
                className="btn text-white dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
              >
                <MenuIcon className="me-2" />
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
                  <Link to="">Log out</Link>
                </li>
              </ul>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SmallBar;
