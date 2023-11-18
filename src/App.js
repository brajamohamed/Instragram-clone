import logo from "./logo.svg";
import "./App.css";
import Login from "./Login/Login";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
// import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./Signup/Signup";
import Home from "./Home/Home";
import ForgotPassword from "./ForgotPassword/ForgotPassword";
import { useEffect, useState } from "react";
import Profile from "./Profile/Profile";
import Navigation from "./Navigation/Navigation";
function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      <div className="App">
        {loggedIn ? <Navigation /> : null}
        <Routes>
          <Route
            path="/"
            element={loggedIn ? <Home /> : <Login setLoggedIn={setLoggedIn} />}
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
