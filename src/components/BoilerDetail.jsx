import React, { useState, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import DropDownMenu from "./DropDownMenu";
import { Pagination } from "@mui/material";
import BoilerCard from "./BoilerCard";
import { manufacturer, type } from "../data/constants";
import { Link } from "react-router-dom";

const BoilerDetail = ({ manufacturerId }) => {
  const [boilerData, setBoilerData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const itemsPerPage = 10;

  const fetchAndFilterData = async () => {
    try {
      const response = await fetch(
        `https://boilers.megcrm.co.uk/api/getData?Model_data&condensing=false&per_page=${itemsPerPage}&specific_columns[0]=*&page=${currentPage}`
      );
      console.log(response);
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await response.json();

      const totalCount = data.data.total;
      const totalPages = Math.ceil(totalCount / itemsPerPage);
      setTotalPages(totalPages);

      const unfilteredData = data.data.data;
      setBoilerData(
        manufacturerId
          ? unfilteredData.filter(
              (boiler) => boiler.manufacturer_id === manufacturerId
            )
          : unfilteredData
      );

      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAndFilterData();
  }, [currentPage, manufacturerId]);

  const handlePageChange = (event, newPage) => {
    setCurrentPage(newPage);
  };
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
            <div className="absolute inset-y-0 left- pl-1 flex items-center pointer-events-none ">
              <CiSearch className="h-6 w-6 md:h-6 md:w-7  text-[#545454] absolute  cursor-pointer" />
            </div>
          </div>
          <div className="z-50 w-[101.82px]">
            <DropDownMenu
              buttonText="Type"
              menuWidth="101.82px"
              menuItems={type}
            />
          </div>
          <div className="z-50 w-[146.64px]">
            <DropDownMenu
              buttonText="manufacturer"
              menuWidth="146px"
              menuItems={manufacturer}
            />
          </div>
        </div>
        <div className="ml-auto">
          <Link to="/boilerdetails">
            <button className="text-[12px] leading-3 flex items-center justify-center ml-auto w-[189px] h-[45px] bg-[#009F78] text-[#FFFFFF] pt-[11px] pr-[41px] pb-[11px] pl-[41px] rounded-[5px] transition-all ease-in duration-300 hover:bg-[#00745E]">
              Compare
            </button>
          </Link>
        </div>
      </div>
      {/* body */}
      <div className="max-w-[750px] h-[841px] flex flex-col gap-3 overflow-y-auto cursor-pointer">
        {loading ? (
          <p>Loading...</p>
        ) : (
          boilerData.map((boiler, index) => (
            <BoilerCard
              key={index}
              model={boiler.Model_data}
              type={boiler.main_type}
              fuel={boiler.fuel}
              efficency={boiler.s_a_p_winter_seasonal_efficiency}
            />
          ))
        )}
      </div>
      <div className="w-[354px] self-center mt-10">
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default BoilerDetail;
