import React from "react";
import PostBar from "../PostBar/Index";
import PostModal from "../PostModal/PostModal";
import { useLocation } from "react-router";

import Notes from "../../Components/Notes/Index";

function Index() {
  const location = useLocation();
  return (
    <div>
      {/* post bar */}
      <PostBar />

      {/* notes */}
      <Notes/>

      

      {/* post modal */}
      {location?.pathname?.includes("modal") && <PostModal />}
    </div>
  );
}

export default Index;
