import React from "react";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import { menuData } from "../Common/Navbar";

const NavMenu = ({ openNavMenu, navMenu }) => {
  return (
    <div
      className={`fixed top-0 w-full left-0  h-full bg-pink-50 shadow-lg transform transition-transform duration-300 flex flex-col z-50 ${
        navMenu ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex justify-end p-3">
        <IoMdClose
          onClick={openNavMenu}
          className="h-6 w-6 text-pink-400 bg-pink-200 rounded-full p-0.5 cursor-pointer"
        />
      </div>

      <div className="">
        <h2 className="text-xl font-semibold mb-4 p-3">Menu</h2>

        <nav className="flex flex-col items-center justify-center w-full h-full space-y-16]">
          {menuData.map((i, index) => {
            return (
              <Link
                key={i.id}
                className="text-black font-medium uppercase hover:text-pink-400 p-6 w-full border-b text-center"
                to={i.to}
              >
                {i.menuName}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default NavMenu;
