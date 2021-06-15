import React, { useState } from "react";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import Fixedsidebar from "./Fixedsidebar";
import "./App.css";
function Index() {
  const [isOpen, setOpen] = useState(true);
  return (
    <div>
      <NavBar setOpen={setOpen} isOpen={isOpen} />
      <SideBar isOpen={isOpen} />
      <Fixedsidebar isOpen={isOpen} />
    </div>
  );
}

export default Index;
