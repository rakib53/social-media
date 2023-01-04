import React from "react";
import LeftSideBar from "./components/LeftSideBar";
import Navbar from "./components/Navbar";
import RightSideBar from "./components/rightSideBar";

const Layout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <LeftSideBar></LeftSideBar>
      <RightSideBar></RightSideBar>
    </div>
  );
};

export default Layout;
