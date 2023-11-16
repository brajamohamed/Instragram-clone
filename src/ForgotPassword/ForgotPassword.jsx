import React from "react";
import "./ForgotPassword.css";
import LockIcon from "./padlock.png";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const ForgotPassword = () => {
  const navigate = useNavigate();
  const usernameRef = useRef();
  const handleClick = (e) => {
    e.preventDefault();
    if (usernameRef.current.checkValidity()) {
      alert("Password reset link has been sent to your Email");
      navigate("/");
    } else {
      document
        .getElementById("needs-validation")
        .classList.add("was-validated");
    }
  };
  return (
    <div className="container">
      <div className="row d-flex justify-content-center mt-5 ">
        <div className="col-lg-6 p-5 border content">
          <img
            className="card-img-top"
            src={LockIcon}
            alt="lock icon"
            // id="lockIcon"
          />
          <h5 className="mt-3">Trouble with logging in?</h5>
          <small className="text-muted mt-3">
            Enter your email address, we'll send you a link to get back into
            your account.
          </small>
          <form
            action=""
            className="mt-3 form"
            id="needs-validation"
            noValidate
          >
            <div className="input-group">
              <input
                type="email"
                className="form-control"
                placeholder="Email address"
                required
                ref={usernameRef}
              />
            </div>
            <button
              className="btn btn-primary rounded mt-3"
              onClick={handleClick}
            >
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
          <div className="border">
            <button className="btn d-block w-100">
              <h5 className=" ">Back to Login</h5>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
