import React from "react";
import "./Signup.css";
import Facebook from "../Login/facebook.png";
import Playstore from "../Login/google play.png";
import MicrosoftStore from "../Login/microsoft.png";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const Signup = () => {
  const navigate = useNavigate();
  const mobileRef = useRef();
  const nameRef = useRef();
  const userNameRef = useRef();
  const passwordRef = useRef();
  const handleSignUp = (e) => {
    e.preventDefault();
    if (
      mobileRef.current.value &&
      nameRef.current.value &&
      userNameRef.current.value &&
      passwordRef.current.value
    ) {
      navigate("/");
    } else {
      document
        .getElementById("needs-validation")
        .classList.add("was-validated");
    }
  };
  return (
    <div className="container vh-100">
      <div className="row mt-5 d-flex justify-content-center">
        <div className="col-lg-6">
          <div className="border px-5">
            <h1 className="my-4">Instagram</h1>
            <p className="text-muted my-3 fw-bold">
              Sign up to see photos and videos from your friends.
            </p>
            <a href="https://www.facebook.com">
              <button className="btn btn-primary w-100">
                <span>
                  <img src={Facebook} alt="facebook logo" />
                </span>
                Log in with Facebook
              </button>
            </a>
            <hr />
            <div className="text-muted">OR</div>
            <form action="" id="needs-validation" noValidate>
              <div className="input-group mb-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Mobile number or email address"
                  ref={mobileRef}
                  required
                />
              </div>
              <div className="input-group mb-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Full Name"
                  ref={nameRef}
                  required
                />
              </div>
              <div className="input-group mb-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Username"
                  ref={userNameRef}
                  required
                />
              </div>
              <div className="input-group mb-2">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  ref={passwordRef}
                  required
                />
              </div>
              <div className="my-3">
                <small>
                  People who use our service may have uploaded your contact
                  information to Instagram.{" "}
                  <a
                    href="https://www.facebook.com/help/instagram/261704639352628"
                    className="text-decoration-none"
                  >
                    Learn more
                  </a>
                </small>
              </div>
              <div className="my-3">
                <small>
                  By signing up, you agree to our Terms, Privacy Policy and
                  Cookies Policy.
                </small>
              </div>
              <button
                type="submit"
                className="btn btn-info text-white fw-bolder w-100 mb-5"
                onClick={handleSignUp}
              >
                Sign Up
              </button>
            </form>
          </div>
          <div className="p-3 border mt-3">
            Have an account?{" "}
            <Link to="/" className="text-decoration-none">
              Log in
            </Link>
          </div>
          <div className="mt-3">
            <p>Get the app.</p>
            <div className="d-flex justify-content-center mt-3">
              <a
                href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=ig_mid%3DF0856760-8B3C-43AA-9E2A-0D3E0DD68F2A%26utm_campaign%3DloginPage%26utm_content%3Dlo%26utm_source%3Dinstagramweb%26utm_medium%3Dbadge%26original_referrer%3Dhttps%253A%252F%252Fwww.google.com%252F"
                target="_blank"
                className="download-link me-2"
              >
                <img
                  src={Playstore}
                  alt="playstore"
                  className="download-icon"
                />
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
      </div>
    </div>
  );
};

export default Signup;
