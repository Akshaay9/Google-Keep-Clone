import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
function SideBar({ isOpen }) {
  return (
    <div>
      <div className={`side-bar ${isOpen ? "transform100" : ""}`}>
        <ul className="">
          <Link to="/">
            <li>
              <i class="far fa-lightbulb "></i> <span>Notes</span>
            </li>
          </Link>
          <li>
            <i class="fas fa-pencil-alt"></i> <span>Edit labels</span>
          </li>
          <Link to="/archieves">
            <li>
              <i class="fas fa-archive"></i> <span>Archieves</span>{" "}
            </li>
          </Link>
          <li>
            <Link to="/trash">
              <i class="fas fa-trash"></i> <span>Trash</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
