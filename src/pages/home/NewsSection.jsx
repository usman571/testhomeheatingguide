import React, { useEffect, useRef } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "./Card";
import { newsData } from "../../data/constants";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 200 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 749, min: 0 },
    items: 1,
  },
};
const BlogSection = () => {
  const carouselRef = useRef(null);

  const handlePrevious = () => {
    if (carouselRef.current) {
      carouselRef.current.previous();
    }
  };

  const handleNext = () => {
    if (carouselRef.current) {
      carouselRef.current.next();
    }
  };
  return (
    <div className=" mx-auto flex flex-col items-center justify-center h-[615px] bg-[#FBFBFE] ">
      <div className="w-full sm:max-w-[700px] md:max-w-[1073px] h-fit relative">
        <h1 className=" text-xl md:text-2xl lg:text-[26px] font-bold text-center">
          News & Updates
        </h1>
        <p className="text-center max-w-[400px] font-normal text-sm text-[#000000] pt-2 mx-auto">
          Explore UK's energy news and updates
        </p>
        <div className="max-w-[250px]  mx-auto sm:max-w-[700px] sm:mx-auto lg:max-w-[1073px]">
          <MdKeyboardArrowLeft
            onClick={handlePrevious}
            className="cursor-pointer text-[#7E7E7E] text-[40px] absolute top-56 left-[35px]  lg:-left-[48px] sm:top-56 sm:left-[15px]"
          />
          <Carousel
            arrows={false}
            responsive={responsive}
            infinite
            containerClass="carousel-container"
            itemClass="carousel-item"
            ref={carouselRef}
          >
            {newsData.map((data) => (
              <Card data={data} key={data.id} />
            ))}
          </Carousel>
          <MdKeyboardArrowRight
            onClick={handleNext}
            className="cursor-pointer text-[#7E7E7E] text-[40px] absolute top-56 right-[35px]  lg:-right-[48px] sm:top-56 sm:right-[15px]"
          />
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
// flex flex-col items-center justify-center w-full h-[615px] bg-[#FBFBFE]
// flex flex-col items-center justify-between w-[1073px] max-w-6xl h-fit
