import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import {
  HiOutlineUser,
  HiOutlineShoppingBag,
  HiBars3BottomRight,
} from "react-icons/hi2";
import SearchBar from "./SearchBar";
import CartDrawer from "../Layout/CartDrawer";
import NavMenu from "../Layout/NavMenu";

export const menuData = [
  {
    id: 1,
    to: "#",
    menuName: "Men",
  },
  {
    id: 2,
    to: "#",
    menuName: "Women",
  },
  {
    id: 3,
    to: "#",
    menuName: "Bottom Wear",
  },
  {
    id: 4,
    to: "#",
    menuName: "Top Wear",
  },
];

const Navbar = () => {
  const [drawerOpener, setDrawerOpener] = useState(false);
  const [navMenu, setNavMenu] = useState(false);

  const openDrawer = () => {
    setDrawerOpener(!drawerOpener);
  };

  const openNavMenu = () => {
    setNavMenu(!navMenu);
  };

  return (
    <>
      <nav className="container mx-auto flex items-center justify-between py-4 px-6 ">
        <div>
          <Link to={"/"} className="text-2xl font-medium">
            EcomWeb
          </Link>
        </div>

        <div className="hidden md:flex space-x-6">
          {menuData.map((i, index) => {
            return (
              <Link
                key={i.id}
                className="text-black font-medium uppercase hover:text-pink-400"
                to={i.to}
              >
                {i.menuName}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center space-x-4">
          <Link to={"/profile"} className="hover:text-pink-400 ">
            <HiOutlineUser className="h-6 w-6" />
          </Link>

          <button className="relative hover:text-pink-400">
            <HiOutlineShoppingBag className="h-6 w-6" onClick={openDrawer} />
            <span className="absolute -top-1 rounded-full bg-red-600 text-white text-xs px-1.5 py-0.5">
              2
            </span>
          </button>

          <div className="overflow-hidden">
            <SearchBar />
          </div>

          <button className="block md:hidden " onClick={openNavMenu}>
            <HiBars3BottomRight className="h-6 w-6 hover:text-pink-400" />
          </button>
        </div>
      </nav>

      <CartDrawer drawerOpener={drawerOpener} openDrawer={openDrawer} />

      <NavMenu openNavMenu={openNavMenu} navMenu={navMenu} />
    </>
  );
};

export default Navbar;
