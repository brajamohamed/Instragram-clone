import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import loginPic from "./insta phone.png";
import Playstore from "./google play.png";
import Facebook from "./facebook.png";
import MicrosoftStore from "./microsoft.png";
import { useRef } from "react";
const Login = ({ setLoggedIn }) => {
  const userNameRef = useRef();
  const passwordRef = useRef();
  const handleLogin = (e) => {
    e.preventDefault();
    if (userNameRef.current.value && passwordRef.current.value) {
      setLoggedIn(true);
    } else {
      document
        .getElementById("needs-validation")
        .classList.add("was-validated");
    }
  };

  return (
    <div className="container">
      <div className="row d-flex justify-content-center align-items-center login-row">
        <div className="col-xl-5 col-lg-6 d-lg-block d-md-none d-sm-none">
          <div>
            <img src={loginPic} alt="login image" />
          </div>
        </div>
        <div className="col-xl-5 col-lg-6 col-md-8">
          <div className="border px-5 login-form">
            <div className="d-flex justify-content-center my-3">
              <img
                src="https://logos-download.com/wp-content/uploads/2016/03/Instagram_Logo_2016.png"
                alt="insta logo"
                id="insta_name_icon"
                className="mt-5 justify-content-center"
              />
            </div>
            <form action="" className="" id="needs-validation">
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  ref={userNameRef}
                  placeholder="Phone number,username or email address"
                  required
                />
              </div>
              <div className="input-group mb-3">
                <input
                  type="password"
                  className="form-control"
                  ref={passwordRef}
                  placeholder="Password"
                  required
                />
              </div>
              <button
                className="btn btn-primary w-100 my-3"
                onClick={handleLogin}
              >
                Log in
              </button>
            </form>
            <hr />
            <div className="d-flex flex-column align-items-center">
              OR
              <a
                href="https://www.facebook.com"
                target="_blank"
                className="my-3 text-decoration-none fw-bolder "
              >
                <span className="me-1">
                  <img src={Facebook} alt="facebook icon" />
                </span>
                Log in with Facebook
              </a>
              <div className="my-3">
                <Link
                  to="/forgotpassword"
                  className="text-decoration-none text-muted"
                >
                  <small>Forgotten your password?</small>
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-3 p-3 border d-flex flex-column align-items-center ">
            Don't have an account?{" "}
            <Link to="/signup" className="fw-bolder text-decoration-none">
              Sign up
            </Link>
          </div>
          <div className="mt-3 d-flex flex-column align-items-center">
            <p>Get the app.</p>
          </div>
          <div className="d-flex justify-content-center mt-3">
            <a
              href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=ig_mid%3DF0856760-8B3C-43AA-9E2A-0D3E0DD68F2A%26utm_campaign%3DloginPage%26utm_content%3Dlo%26utm_source%3Dinstagramweb%26utm_medium%3Dbadge%26original_referrer%3Dhttps%253A%252F%252Fwww.google.com%252F"
              target="_blank"
              className="download-link me-2"
            >
              <img src={Playstore} alt="playstore" className="download-icon" />
            </a>
            <a
              href="ms-windows-store://pdp/?productid=9nblggh5l9xt&referrer=appbadge&source=www.instagram.com&mode=mini&pos=1084%2C0%2C836%2C1032"
              target="_blank"
              className="download-link ms-2"
            >
              <img
                src={MicrosoftStore}
                alt="microsoft store"
                className="download-icon"
              />
            </a>
          </div>
        </div>
      </div>
      {/* <footer className="footer">
        <div className="d-flex justify-content-center flex-wrap">
          <a href="/" className="text-decoration-none text-muted ">
            <span className="me-2">Meta</span>
          </a>
          <a href="/" className="text-decoration-none text-muted ">
            <span className="me-2">About</span>
          </a>
          <a href="/" className="text-decoration-none text-muted ">
            <span className="me-2">Blog</span>
          </a>
          <a href="/" className="text-decoration-none text-muted ">
            <span className="me-2">Jobs</span>
          </a>
          <a href="/" className="text-decoration-none text-muted ">
            <span className="me-2">Help</span>
          </a>
          <a href="/" className="text-decoration-none text-muted ">
            <span className="me-2">API</span>
          </a>
          <a href="/" className="text-decoration-none text-muted ">
            <span className="me-2">Privacy</span>
          </a>
          <a href="/" className="text-decoration-none text-muted ">
            <span className="me-2">Terms</span>
          </a>
          <a href="/" className="text-decoration-none text-muted ">
            <span className="me-2">Locations</span>
          </a>
          <a href="/" className="text-decoration-none text-muted ">
            <span className="me-2">Instagram Lite</span>
          </a>
          <a href="/" className="text-decoration-none text-muted ">
            <span className="me-2">Threads</span>
          </a>
          <a href="/" className="text-decoration-none text-muted ">
            <span className="me-2">Contact uploading and non-users</span>
          </a>
          <a href="/" className="text-decoration-none text-muted ">
            <span className="me-2">Meta Verified</span>
          </a>
        </div>
        <div>
          <small className="text-muted">&copy; 2023 Instagram from Meta </small>
        </div>
      </footer> */}
    </div>
  );
};

export default Login;
