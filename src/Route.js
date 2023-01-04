import { Route, Routes } from "react-router-dom";

import React from "react";
import Post from "./components/Post";
import Login from "./pages/Login";
import Resistration from "./pages/Resistration";
import User from "./pages/User";

const MyRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<div>hello homepage</div>}>
        <Route path="/:id" element={<Post></Post>}></Route>
      </Route>
      <Route path="/login" element={<Login></Login>} />
      <Route path="/registration" element={<Resistration></Resistration>} />
      <Route path="about" element={<div>hello about page</div>} />
      <Route path="user" element={<User></User>} />
    </Routes>
  );
};

export default MyRoute;
