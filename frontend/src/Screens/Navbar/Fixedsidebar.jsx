import React from "react";
import "./Sidebar.css";
function Fixedsidebar({ isOpen }) {
  return (
    <div>
      <div className={`fixed-bar ${isOpen ? "transform0" : ""} `}>
        <ul>
          <li>
            {" "}
            <i class="far fa-lightbulb "></i>
          </li>
          <li>
            {" "}
            <i class="fas fa-pencil-alt"></i>
          </li>
          <li>
            {" "}
            <i class="fas fa-archive"></i>{" "}
          </li>
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
