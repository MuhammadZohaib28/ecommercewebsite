import React, { useState } from "react";
import { HiMagnifyingGlass, HiMiniXMark } from "react-icons/hi2";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleSearchOpner = () => {
    setIsOpen(!isOpen);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Serach:", searchTerm);
    setIsOpen(false);
    setSearchTerm("");
  };
  return (
    <div
      className={`flex items-center justify-center w-full transition-all duration-300 ${
        isOpen
          ? "absolute top-0 left-0 w-full bg-yellow-50 h-20 z-50 "
          : "w-auo"
      }`}
    >
      {isOpen ? (
        <form
          onSubmit={handleSearch}
          className="relative flex items-center justify-center w-full"
        >
          <div className="relative w-1/2">
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-pink-100 px-4 py-2 outline-none rounded-2xl w-full "
            />

            <button type="submit" className="absolute right-2 top-1/6">
              <HiMagnifyingGlass className="h-6 w-6 text-pink-200 hover:text-pink-400" />
            </button>
          </div>

          <button
            type="button"
            className="absolute right-4 top-1/2 transform -translate-y-1/2"
            onClick={handleSearchOpner}
          >
            <HiMiniXMark className="h-6 w-6 hover:text-pink-400" />
          </button>
        </form>
      ) : (
        <button onClick={handleSearchOpner}>
          <HiMagnifyingGlass className="h-6 w-6 hover:text-pink-400" />
        </button>
      )}
    </div>
  );
};

export default SearchBar;
