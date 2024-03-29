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
import PrivateRoute from "./PrivateRoute";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { BE_URL } from "./const";

function App() {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.User.User);

  useEffect(() => {
    if (token) {
      dispatch(getAllNotes(token));
      dispatch(getAllTags(token));
      dispatch(getAllTrash(token));
      dispatch(getAllArchieves(token));
    }
  }, [token]);

  useEffect(() => {
    (async () => {
      const data = await axios.get(`${BE_URL}/`);
    })();
  }, []);

  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <ToastContainer
          position="top-right"
          autoClose={30}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={true}
          rtl={false}
        />
        <ToastContainer />
        <Routes>
          <PrivateRoute path="/" element={<HomeScreen />} />
          <PrivateRoute path="/archieves" element={<Archieves />} />
          <PrivateRoute path="/trash" element={<Trash />} />
          <PrivateRoute path="/search" element={<Search />} />
          <PrivateRoute path="/modal" element={<HomeScreen />} />
          <PrivateRoute path="/modal/:id" element={<HomeScreen />} />
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
