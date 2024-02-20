import React from "react";
import DropDownMenu from "./DropDownMenu";
import { CiSearch } from "react-icons/ci";
import BoilerCard from "./BoilerCard";
import Pagination from "./Pagination";
import ManuFactures from "./ManuFactures";
import { boilerCardsData, manufacturer, manufacturersData, type } from "../data/constants";
import BoilerDetail from "./BoilerDetail";
import BoilerDetails from "./BoilerDetails";

const BoilerBody = () => {
  return (
    <div>
      <div className="w-[1110px] h-[1012px] mx-auto my-10 flex justify-between">
        {/* left side */}
        {/* <BoilerDetail/> */}
        <BoilerDetails/>
        {/* right side */}
        <div className="h-[926px] w-[258px]  space-y-3">
          <button className="w-full h-[46px] rounded-sm pt-[11px] pr-[41px] pb-[11px] pl-[41px] bg-[#009F780F] font-bold text-[14px] leading-4 text-[#545454]">
            Manufactures
          </button>
          <div>
            <div className="relative ml-4">
              <input
                type="text"
                placeholder="Manufacturers name"
                className=" placeholder:font-lato placeholder:font-semibold 
                     placeholder:text-[14px] placeholder:leading-4 placeholder:text-[#A7A7A7] text-[#A7A7A7]
                        border border-[#D9D9D9] pt-[7px] pr-[13px] pb-[7px] pl-[12px] rounded-[3px] focus:outline-none  w-[223.61px] h-[41.25px]"
              />
              <div className="absolute inset-y-0 right-[57px] pl-1 flex items-center pointer-events-none">
                <CiSearch className="h-6 w-6 md:h-6 md:w-7  text-[#545454] absolute  cursor-pointer" />
              </div>
            </div>
            <div className="ml-4 mt-5 space-y-4">
              {manufacturersData.map((manufacturer) => (
                <div key={manufacturer.id} className="flex items-center gap-2">
                  <input
                    className="w-[15px] h-[16px]"
                    type="checkbox"
                    name={`manufacturer_${manufacturer.id}`}
                    id={`manufacturer_${manufacturer.id}`}
                  />
                  <span className="font-semibold font-lato text-[14px] leading-4 text-[#545454]">
                    {manufacturer.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoilerBody;
