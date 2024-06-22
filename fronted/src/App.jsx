import React, { useEffect, useState } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import Home from "./Components/Home";
import Employment from "./Components/Main/Sub/Employment";
import Skilldev from "./Components/Main/Sub/Skilldev";
import Leisure from "./Components/Main/Sub/Leisure";
import Login from "./Components/Main/Login";
import Signin from "./Components/Main/Signin";
import Jobapp from "./Components/Admin/Jobapp";
import PrivateRoute from "./Components/PrivateRoute";
import Admin from "./Components/Admin/Admin";
import Blogs from "./Components/Main/Blogs";

function App() {
  return (
    <>
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route
          path="/employment"
          element={<PrivateRoute element={<Employment />} />}
        />
        <Route
          path="/skilldev"
          element={<PrivateRoute element={<Skilldev />} />}
        />
        <Route
          path="/leisure"
          element={<PrivateRoute element={<Leisure />} />}
        />
        <Route
          path="/admin"
          element={<PrivateRoute element={<Admin />} />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/jobapp" element={<Jobapp />} />
        <Route path="/blog/:id" element={<Blogs/>} />
      </Routes>
    </>
  );
}

export default App;
