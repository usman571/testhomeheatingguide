import React, { useState, useEffect } from "react";
import axios from "axios";
import { CiSearch } from "react-icons/ci";
import { manufacturersData as defaultManufacturersData } from "../../data/constants";
import BoilerDetail from "./BoilerDetail";
import BoilerDetails from "./BoilerDetails";

const BoilerBody = () => {
  const [manufacturersData, setManufacturersData] = useState(
    defaultManufacturersData
  );
  const [loading, setLoading] = useState(true);
  const [manufacturerId, setManufacturerId] = useState();
  const [token, setToken] = useState(null);

  useEffect(() => {
    // Fetch token when the component mounts
    const fetchToken = async () => {
      try {
        console.log("api is calling");
        const response = await fetch(
          "https://boilers.megcrm.co.uk/api/GetToken",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to authenticate");
        }

        const data = await response.json();
        const authToken = data.data.token;
        console.log("auth token");
        console.log(authToken);
        setToken(authToken);
      } catch (error) {
        console.error("Error during token generation:", error);
      }
    };

    fetchToken();
  }, []);

  useEffect(() => {
    // Fetch manufacturers using the obtained token
    const fetchManufacturers = async () => {
      try {
        if (!token) {
          console.error("Token not available");
          return;
        }

        const response = await axios.get(
          "https://boilers.megcrm.co.uk/api/get-manufacturer",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.data.success) {
          throw new Error("Failed to fetch manufacturers data");
        }
        console.log(response.data.data);
        setManufacturersData(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching manufacturers data:", error);
        setLoading(false);
      }
    };

    fetchManufacturers();
  }, [token]);

  const handleManufacturerCheckboxChange = (id) => {
    setManufacturerId(id);
  };

  return (
    <div>
      <div className="w-[1110px] h-[1012px] mx-auto my-10 flex justify-between">
        {/* left side */}
        <BoilerDetail manufacturerId={manufacturerId} />
        {/* <BoilerDetails/> */}
        {/* right side */}
        <div className="w-[258px] space-y-3">
          {/* ... other code ... */}
          <div className="h-[726px] overflow-y-scroll">
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
                {loading ? (
                  <p>Loading...</p>
                ) : (
                  manufacturersData.map((manufacturer) => (
                    <div
                      key={manufacturer.id}
                      className="flex items-center gap-2"
                    >
                      <input
                        className="w-[15px] h-[16px]"
                        type="checkbox"
                        name={`manufacturer_${manufacturer.original_manufacturer_name}`}
                        id={`manufacturer_${manufacturer.id}`}
                        checked={manufacturer.id === manufacturerId}
                        onChange={() =>
                          handleManufacturerCheckboxChange(manufacturer.id)
                        }
                      />
                      <span className="font-semibold font-lato text-[14px] leading-4 text-[#545454]">
                        {manufacturer.original_manufacturer_name}
                      </span>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoilerBody;
