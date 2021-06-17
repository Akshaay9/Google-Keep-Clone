import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
function Fixedsidebar({ isOpen }) {
  return (
    <div>
      <div className={`fixed-bar ${isOpen ? "transform0" : ""} `}>
        <ul>
          <Link to="/">
            <li>
              {" "}
              <i class="far fa-lightbulb "></i>
            </li>
          </Link>
          <li>
            {" "}
            <i class="fas fa-pencil-alt"></i>
          </li>
          <Link to="/archieves">
            <li>
              {" "}
              <i class="fas fa-archive"></i>{" "}
            </li>
          </Link>
          <li>
            {" "}
            <i class="fas fa-trash"></i>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Fixedsidebar;
