import React, { useEffect } from "react";
import "./App.css";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";
import axios from "axios";
function LandingPage() {
  const location = useLocation();
  return (
    <>
      {location.pathname.includes("login") && <Login />}
      {location.pathname.includes("signup") && <SignUp />}

      <div className="landing-bg ">
        <div className="landing-bg-logo ">
          <h2>
            <span style={{ color: "#fbbc04" }}>Fit.</span>Keep
          </h2>
        </div>

        <div className="landing-bg-container ">
          <div className="landing-bg-subtitle ">
            <span></span>
            <h4> Akshay</h4>
          </div>
          <div className="landing-bg-maintitle">
            <h1>
             Application to pen down your thoughts, ideas and goals to be more{" "}
              <span style={{ color: "#fbbc04" }}>Productive.</span>
            </h1>
          </div>

          <div className="landing-bg-points">
            <ul>
              <li>Start writing your thoughts,wishlist and goal</li>
              <li>Edit or delete your thoughts</li>
              <li>Archieve your thoughts </li>
              <li>Grow and evolve as an individual </li>
            </ul>
          </div>

          <Link to="/landing/signup">
            {" "}
            <button className="landing-bg-signup">Sign Up</button>
          </Link>
          <Link to="/landing/login">
            {" "}
            <button className="landing-bg-login">Login</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
