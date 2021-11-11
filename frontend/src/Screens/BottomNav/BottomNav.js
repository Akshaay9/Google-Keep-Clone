import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
function BottomNav() {
  const location = useLocation();
  return (
    <div>
       {!location?.pathname?.includes("landing") && (
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
        )}
        
    </div>
  );
}

export default BottomNav;
