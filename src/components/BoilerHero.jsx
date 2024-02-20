import React from "react";

const BoilerHero = () => {
  const backgroundImageStyle = {
    backgroundImage: "url('/assets/bgBoiler.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div
      className=" md:h-[381px] flex justify-between overflow-hidden"
      style={backgroundImageStyle}
    >
      <div className="max-w-[1280px] mx-auto text-[#FFFFFF] flex items-center justify-center">
        <div>
          <h1 className="font-extrabold text-[46px] leading-[55.2px] font-lato text-center mb-4">
            Boilers
          </h1>
          <p className="max-w-[665px] font-lato font-semibold text-[20px]  leading-6">
            Compare boiler efficiencies & find out if a new boiler could save
            you money
          </p>
        </div>
      </div>
    </div>
  );
};

export default BoilerHero;
