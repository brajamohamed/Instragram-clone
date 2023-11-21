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
    <div className="container-fluid forgot-container pt-5">
      <div className="container">
        <div className="row d-flex justify-content-center ">
          <div className="col-lg-6 px-5 py-3 border content ">
            <div className="d-flex justify-content-center">
              <img
                className="card-img-top"
                src={LockIcon}
                alt="lock icon"
                // id="lockIcon"
              />
            </div>
            <h5 className="mt-3 d-flex justify-content-center">
              Trouble with logging in?
            </h5>
            <small className="text-muted mt-3 d-flex justify-content-center">
              Enter your email address, we'll send you a link to get back into
              your account.
            </small>
            <form
              action=""
              className="mt-3 form "
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
              <div className="d-flex justify-content-center">
                <button
                  className="btn btn-primary rounded mt-3"
                  onClick={handleClick}
                >
                  Send Login Link
                </button>
              </div>
              <div className="mt-1 d-flex justify-content-center">
                <small>Can't reset your password?</small>
              </div>
            </form>

            <hr />
            <div>
              <div className="d-flex justify-content-center">OR</div>
              <div className="d-flex justify-content-center">
                <Link to="/signup" className="text-decoration-none text-muted">
                  <h5 className="create-new-account">Create New Account</h5>
                </Link>
              </div>
            </div>
            <div className="border mt-4">
              <Link to="/" className="text-decoration-none">
                <button className="btn d-block w-100">
                  <h5 className="text-decoration-none">Back to Login</h5>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
