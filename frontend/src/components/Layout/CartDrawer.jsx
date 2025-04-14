import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import CartContent from "../Cart/CartContent";

const CartDrawer = ({ drawerOpener, openDrawer }) => {
  return (
    <div
      className={`fixed top-0 right-0 w-3/4 sm:w-1/2 md:w-[30rem] h-full bg-pink-50 shadow-lg transform transition-transform duration-300 flex flex-col z-50 ${
        drawerOpener ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex justify-end p-3">
        <button onClick={openDrawer}>
          <IoMdClose className="h-6 w-6 text-pink-400 bg-pink-200 rounded-full p-0.5 cursor-pointer" />
        </button>
      </div>

      <div className="flex-grow p-4 overflow-y-auto">
        <h2 className="text-xl font-semibold mb-4">Your Cart</h2>

        <CartContent />
      </div>

      <div className="p-4 bg-white sticky bottom-0">
        <button className="w-full bg-pink-300 text-white p-2 rounded-full font-semibold hover:bg-pink-400 transition cursor-pointer">
          Checkout
        </button>
        <p className="text-sm tracking-tighter text-gray-900 mt-2 text-center">
          Shipping, taxes and discount codes calculated at checkout.
        </p>
      </div>
    </div>
  );
};

export default CartDrawer;
