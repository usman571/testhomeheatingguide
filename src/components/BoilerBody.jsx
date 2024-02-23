import React, { useState, useEffect } from "react";
import axios from "axios";
import { CiSearch } from "react-icons/ci";
import { manufacturersData as defaultManufacturersData } from "../data/constants";
import BoilerDetail from "./BoilerDetail";
import BoilerDetails from "./BoilerDetails";

const BoilerBody = () => {
  const [manufacturersData, setManufacturersData] = useState(
    defaultManufacturersData
  );
  const [loading, setLoading] = useState(true);
  const [manufacturerId, setManufacturerId] = useState();

  useEffect(() => {
    const fetchManufacturers = async () => {
      try {
        const response = await axios.get(
          "https://boilers.megcrm.co.uk/api/get-manufacturer"
        );

        if (!response.data.success) {
          throw new Error("Failed to fetch manufacturers data");
        }

        setManufacturersData(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching manufacturers data:", error);
        setLoading(false);
      }
    };

    fetchManufacturers();
  }, []);

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
  );
};

export default BoilerBody;
