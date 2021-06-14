import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Screens/Navbar/Index";
function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
