import React from "react";
import { ImFacebook } from "react-icons/im";
import { SlSocialLinkedin, SlSocialGoogle } from "react-icons/sl";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#2E3538] text-white pt-16">
      <div className="container mx-auto flex items-start md:items-center justify-between flex-col gap-3  md:flex-row px-20 max-w-[1281px]">
        <div className="mb-4 md:mr-8 self-center md:self-auto">
          <div className="flex items-center">
            <span className="text-white text-lg font-bold relative">
              Home Heating
              <span className="absolute font-normal text-sm ml-1">Guide</span>
            </span>
          </div>
          <p className="mt-2 text-gray-300 text-sm">
            &copy; 2024 All Rights Reserved
          </p>
        </div>

        <div className="flex">
          <ul className="flex flex-col space-y-4">
            <li className="flex">
              <a href="#" className="hover:text-[#009F78] text-white font-semibold">
                Explore
              </a>
            </li>
            <li className="flex">
              <a href="#" className="hover:text-[#009F78] text-gray-300 text-sm">
                Central Heating
              </a>
            </li>
            <li className="flex items-center">
              <a href="#" className="hover:text-[#009F78] text-gray-300 text-sm">
                Grants & Schemes
              </a>
            </li>
            <li className="flex items-center">
              <a href="#" className="hover:text-[#009F78] text-gray-300 text-sm">
                Energy Efficiency
              </a>
            </li>
            <li className="flex items-center">
              <a href="#" className="hover:text-[#009F78] text-gray-300 text-sm">
                UK Energy News
              </a>
            </li>
          </ul>
        </div>

        <div className="flex items-center">
          <ul className="flex flex-col space-y-4">
            <li className="flex">
              <a href="#" className="hover:text-[#009F78] text-white font-semibold">
                Support
              </a>
            </li>
            <li className="flex">
              <a href="#" className="hover:text-[#009F78] text-gray-300 text-sm">
                Help
              </a>
            </li>
            <li className="flex items-center">
              <a href="#" className="hover:text-[#009F78] text-gray-300 text-sm">
                Support
              </a>
            </li>
            <li className="flex items-center">
              <a href="#" className="hover:text-[#009F78] text-gray-300 text-sm">
                Privacy
              </a>
            </li>
            <li className="flex items-center">
              <a href="#" className="hover:text-[#009F78] text-gray-300 text-sm">
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>

        <div className="flex md:self-start">
          <ul className="flex flex-col space-y-4">
            <li className="flex">
              <a href="#" className="hover:text-[#009F78] text-white font-semibold">
                Follow Us on:
              </a>
            </li>
            <li className="flex gap-2">
              <li className="flex items-center justify-center rounded-full w-9 h-9 ring-1 ring-gray-100 hover:bg-[#009F78] cursor-pointer transition-all duration-300">
                <ImFacebook />
              </li>
              <li className="flex items-center justify-center rounded-full w-9 h-9 ring-1 ring-gray-100 hover:bg-[#009F78] cursor-pointer transition-all duration-300">
                <SlSocialLinkedin />
              </li>
              <li className="flex items-center justify-center rounded-full w-9 h-9 ring-1 ring-gray-100 hover:bg-[#009F78] cursor-pointer transition-all duration-300">
                <SlSocialGoogle />
              </li>
              <li className="flex items-center justify-center rounded-full w-9 h-9 ring-1 ring-gray-100 hover:bg-[#009F78] cursor-pointer transition-all duration-300">
                <FaTwitter />
              </li>
            </li>
          </ul>
        </div>
      </div>
      <hr className=" mt-14" />
      <div className="flex items-center justify-center mt-5 ">
        <p className=" text-xs font-normal mb-5">Powered by Intelliscence</p>
      </div>
    </footer>
  );
};

export default Footer;
