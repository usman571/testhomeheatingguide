import React, { useRef } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "./Card";
import { blogData } from "../../data/constants";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const MyCarousel = () => {
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
    <div>
      <Carousel
        responsive={responsive}
        infinite
        containerClass="carousel-container"
        itemClass="carousel-item"
        ref={carouselRef}
      >
        {blogData.map((data) => (
          <Card data={data} key={data.id} />
        ))}
      </Carousel>

      <div className="flex justify-between mt-4">
        <button
          onClick={handlePrevious}
          className="bg-[#009F78] text-white py-2 px-6 rounded-md transition-all ease-in duration-300 hover:bg-[#00745E]"
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          className="bg-[#009F78] text-white py-2 px-6 rounded-md transition-all ease-in duration-300 hover:bg-[#00745E]"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default MyCarousel;
