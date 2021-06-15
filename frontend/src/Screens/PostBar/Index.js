import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
function Index() {
  return (
    <div>
      <Link to="/modal">
        <div className="postBar ">
          <h4>Take a note...</h4>
        </div>
      </Link>
    </div>
  );
}

export default Index;
