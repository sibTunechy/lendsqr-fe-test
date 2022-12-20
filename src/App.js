import "./App.css";
import { useEffect } from "react";
import { Routes, Router, Route } from "react-router-dom";

// COMPONENTS
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";

// PAGES
import Userpage from "./Pages/UserPage/Userpage";
import UserDetails from "./Pages/UserDetailsPage/UserDetails";
import Login from "./Pages/Login/Login";

import {  useSelector } from "react-redux";



function App() {
  const { isLoggedIn } = useSelector((store) => store.user);

  return (
    <>
      {isLoggedIn && <Navbar />}
      {isLoggedIn && <Sidebar />}
      <Routes>
        <Route exact  path="/" element={<Login />} />
        <Route path="/home/user" element={<Userpage />} />
        <Route path="/home/user/userdetails/:id" element={<UserDetails />} />
      </Routes>
    </>
  );
}

export default App;
