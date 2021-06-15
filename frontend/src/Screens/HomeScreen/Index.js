import React from "react";
import PostBar from "../PostBar/Index";
import PostModal from "../PostModal/PostModal";
import { useLocation } from "react-router";

function Index() {
  const location = useLocation();
  return (
    <div>
      <PostBar />
      {location.pathname.includes("modal") && <PostModal />}

    </div>
  );
}

export default Index;
