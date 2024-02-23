import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const dropdownButtonRef = React.createRef();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSearchInputChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const filteredItems = ["Uppercase", "Lowercase", "Camel Case", "Kebab Case"]
    .filter((item) => item.toLowerCase().includes(searchTerm))
    .map((filteredItem, index) => (
      <a
        key={index}
        href="#"
        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer rounded-md"
      >
        {filteredItem}
      </a>
    ));

  return (
    <div className=" flex items-center ">
      <div className="relative group">
        <button
          ref={dropdownButtonRef}
          onClick={toggleDropdown}
          className="inline-flex justify-center w-full mt-2 text-sm font-medium text-gray-700 bg-white   "
        >
          <MdKeyboardArrowDown className="h-5 w-5 text-[#545454]" />
          <span className="mr-2">Manufecturer</span>
        </button>
        <div
          className={`${
            isOpen ? "" : "hidden"
          } absolute right-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 p-1 space-y-1`}
        >
          {/* Search input */}
          <input
            onChange={handleSearchInputChange}
            value={searchTerm}
            className="block w-full px-4 py-2 text-gray-800 border rounded-md border-gray-300 focus:outline-none"
            type="text"
            placeholder="Search items"
            autoComplete="off"
          />
          {/* Dropdown content goes here */}
          {filteredItems.length === 0 ? (
            <p className="px-4 py-2 text-gray-500">No matching items</p>
          ) : (
            filteredItems
          )}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
