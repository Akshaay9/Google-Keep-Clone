import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
function BottomNav() {
  return (
    <div>
      <div className="bottom-nav mobileHide ">
        <ul>
          <Link to="/">
            <li>
              {" "}
              <i class="far fa-lightbulb "></i>
            </li>
          </Link>
          <Link to="/archieves">
            <li>
              {" "}
              <i class="fas fa-archive"></i>{" "}
            </li>
          </Link>{" "}
          <Link to="/trash">
            <li>
              <i class="fas fa-trash"></i>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default BottomNav;
