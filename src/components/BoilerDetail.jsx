import React from "react";
import { CiSearch } from "react-icons/ci";
import DropDownMenu from "./DropDownMenu";
import { boilerCardsData, manufacturer, type } from "../data/constants";
import { Pagination } from "@mui/material";
import BoilerCard from "./BoilerCard";

const BoilerDetail = () => {
  return (
    <div className="flex flex-col gap-4 w-[750px] h-[1012px] ">
      {/* top bar */}
      <div className=" max-w-[750px] h-[45px] flex gap-3">
        <div className="flex gap-3 h-[45px]">
          <div className="relative">
            <input
              type="text"
              placeholder="Boiler Name, Model"
              className="placeholder:font-lato placeholder:font-semibold 
               placeholder:text-[14px] placeholder:leading-4 placeholder:text-[#A7A7A7] text-[#A7A7A7]
                  border border-[#D9D9D9] pt-[6px] pr-[116px] pb-[6px] pl-[36px] rounded-[3px] focus:outline-none  w-[280.61px] h-[45.25px]"
            />
            <div className="absolute inset-y-0 left- pl-1 flex items-center pointer-events-none">
              <CiSearch className="h-6 w-6 md:h-6 md:w-7  text-[#545454] absolute  cursor-pointer" />
            </div>
          </div>
          <div>
            <DropDownMenu
              buttonText="Type"
              menuWidth="101.82px"
              menuItems={type}
            />
          </div>
          <div>
            <DropDownMenu
              buttonText="manufacturer"
              menuWidth="146px"
              menuItems={manufacturer}
            />
          </div>
        </div>
        <div className="ml-auto">
          <button className="text-[12px] leading-3 flex items-center justify-center ml-auto w-[189px] h-[45px] bg-[#009F78] text-[#FFFFFF] pt-[11px] pr-[41px] pb-[11px] pl-[41px] rounded-[5px] transition-all ease-in duration-300 hover:bg-[#00745E]">
            Compare
          </button>
        </div>
      </div>
      {/* body */}
      <div className=" max-w-[750px] h-[841px] flex flex-col gap-3">
        {boilerCardsData.map((boilerData, index) => (
          <BoilerCard
            key={index}
            model={boilerData.model}
            type={boilerData.type}
            manufacturer={boilerData.manufacturer}
          />
        ))}
        <div className="w-[354px] self-center mt-10">
          <Pagination count={4}/>
        </div>
      </div>
    </div>
  );
};

export default BoilerDetail;
