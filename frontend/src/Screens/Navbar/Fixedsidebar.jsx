import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
function Fixedsidebar({ isOpen }) {
  return (
    <div>
      <div className={`desktopHide fixed-bar ${isOpen ? "transform0" : ""} `}>
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
          </Link>
   
            {" "}
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

export default Fixedsidebar;
