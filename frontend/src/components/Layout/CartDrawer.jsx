import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";

const CartDrawer = ({ drawerOpener, openDrawer }) => {
  return (
    <div
      className={`fixed top-0 right-0 w-3/4 sm:w-1/2 md:w-1/4 h-full bg-pink-50 shadow-lg transform transition-transform duration-300 flex flex-col z-50 ${
        drawerOpener ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex justify-end p-3">
        <button onClick={openDrawer}>
          <IoMdClose className="h-6 w-6 text-pink-400" />
        </button>
      </div>
    </div>
  );
};

export default CartDrawer;
