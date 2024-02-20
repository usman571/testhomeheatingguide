import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";

const DropDownMenu = ({ buttonText, menuWidth, menuItems }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        id="dropdownDefaultButton"
        onClick={toggleDropdown}
        className={`flex justify-between items-center text-[#A7A7A7] border border-[#D9D9D9] font-medium rounded-[3px] text-sm pt-[11px] pr-[14px] pb-[11px] pl-[14px] w-[${menuWidth}]`}
        type="button"
      >
        {buttonText}
        <MdKeyboardArrowDown className="h-5 w-5 text-[#A7A7A7]" />
      </button>

      <div
        id="dropdown"
        className={`${
          isOpen ? "block" : "hidden"
        } z-50 bg-white divide-y divide-gray-100 rounded-lg shadow w-[${menuWidth}] dark:bg-gray-700`}
      >
        <ul
          className="py-2 text-sm text-gray-700 dark:text-gray-200 z-50"
          aria-labelledby="dropdownDefaultButton"
        >
          {menuItems.map((item, index) => (
            <li key={index}>
              <a
                href={item.link}
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white z-50"
              >
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default DropDownMenu;
