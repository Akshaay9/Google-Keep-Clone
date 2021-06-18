import React, { useState } from "react";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import Fixedsidebar from "./Fixedsidebar";
import "./App.css";
import {useLocation} from "react-router-dom"
function Index() {
  const location = useLocation();
  const [isOpen, setOpen] = useState(false);
  return (
    <div>
      {!location?.pathname?.includes("landing") && (
        <>
          <NavBar setOpen={setOpen} isOpen={isOpen} />
          <SideBar isOpen={isOpen} />
          <Fixedsidebar isOpen={isOpen} />
        </>
      )}
    </div>
  );
}

export default Index;
