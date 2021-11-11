import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
function SideBar({ isOpen }) {
  return (
    <div>
      <div className={`desktopHide side-bar ${isOpen ? "transform100" : ""}`}>
        <ul className="">
          <Link to="/">
            <li>
              <i class="far fa-lightbulb "></i> <span>Notes</span>
            </li>
          </Link>

          <Link to="/archieves">
            <li>
              <i class="fas fa-archive"></i> <span>Archieves</span>{" "}
            </li>
          </Link>

          <Link to="/trash">
            <li>
              <i class="fas fa-trash"></i> <span>Trash</span>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
