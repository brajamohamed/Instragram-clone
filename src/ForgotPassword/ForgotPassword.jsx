import React from "react";
import "./ForgotPassword.css";
import LockIcon from "./padlock.png";
import { useRef } from "react";
import { Link } from "react-router-dom";
const ForgotPassword = () => {
  const usernameRef = useRef();
  return (
    <div className="container ">
      <div className="row d-flex justify-content-center mt-5">
        <div className="card col-lg-6 border content">
          <img
            className="card-img-top"
            src={LockIcon}
            alt="lock icon"
            // id="lockIcon"
          />
          <h5 className="mt-3">Trouble with logging in?</h5>
          <small className="text-muted mt-3">
            Enter your email address,phone number or username and we'll send you
            a link to get back into your account.
          </small>
          <form action="" className="mt-3 form">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Email address,phone number or username"
                required
                ref={usernameRef}
              />
            </div>
            <button className="btn btn-primary rounded mt-3">
              Send Login Link
            </button>
            <div className="mt-1">
              <small>Can't reset your password?</small>
            </div>
          </form>

          <hr />
          <div className="mb-5">
            OR <br />
            <Link to="/signup" className="text-decoration-none text-muted">
              <h5>Create New Account</h5>
            </Link>
          </div>
          <div className="card-footer border">
            <button className="btn w-100">
              <Link to="/" className="text-decoration-none text-dark">
                <h5 className=" ">Back to Login</h5>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
