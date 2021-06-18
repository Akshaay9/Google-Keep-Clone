import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Screens/Navbar/Index";
import HomeScreen from "./Screens/HomeScreen/Index";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllArchieves,
  getAllNotes,
  getAllTags,
  getAllTrash,
} from "./features/Notes/NotesSlice";
import Archieves from "./Screens/Archieves/Archieves";
import Trash from "./Screens/Trash/Trash";
import Search from "./Screens/Search/Search";
import BottomNav from "./Screens/BottomNav/BottomNav";
import LandingPage from "./Screens/UserAccount/LandingPage";

function App() {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.User);

  useEffect(() => {
    if (token) {
      dispatch(getAllNotes(token));
      dispatch(getAllTags(token));
      dispatch(getAllTrash(token));
      dispatch(getAllArchieves(token));
    }
  }, []);

  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/archieves" element={<Archieves />} />
          <Route path="/trash" element={<Trash />} />
          <Route path="/search" element={<Search />} />
          <Route path="/modal" element={<HomeScreen />} />
          <Route path="/modal/:id" element={<HomeScreen />} />
          <Route path="/landing" element={<LandingPage />} />
          <Route path="/landing/login" element={<LandingPage />} />
          <Route path="/landing/signup" element={<LandingPage />} />
        </Routes>
        <BottomNav />
      </BrowserRouter>
    </div>
  );
}

export default App;
