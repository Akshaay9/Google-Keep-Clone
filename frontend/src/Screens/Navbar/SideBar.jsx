import React from "react";
import "./Sidebar.css";
function SideBar({ isOpen }) {
  return (
    <div>
      <div className={`side-bar ${isOpen ? "transform100" : ""}`}>
        <ul className="">
          <li>
            <i class="far fa-lightbulb "></i> <span>Notes</span>
          </li>
          <li>
            <i class="fas fa-pencil-alt"></i> <span>Edit labels</span>
          </li>
          <li>
            <i class="fas fa-archive"></i> <span>Archieves</span>
          </li>
          <li>
            <i class="fas fa-trash"></i> <span>Trash</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
