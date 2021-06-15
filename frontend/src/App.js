import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Screens/Navbar/Index";
import HomeScreen from "./Screens/HomeScreen/Index"
function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomeScreen/>} />
          <Route path="/modal" element={<HomeScreen/>} />
          <Route path="/modal/:id" element={<HomeScreen/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;