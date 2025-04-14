import React from "react";
import TopBar from "../Layout/TopBar";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="border-b border-pink-200">
      <TopBar />
      <Navbar />  
    </div>
  );
};

export default Header;
