import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import Header from "../components/Header";
import BlogSection from "../components/BlogSection";
import NewsSection from "../components/NewsSection";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import HeroSection from "../components/Quote";
import Hero from "../components/Hero";
import ManuFactures from "../components/ManuFactures";
import Carasol from "../components/Carasol";

const Home = () => {
  return (
    <div className=" w-full max-h-[3457px] mx-auto">
      <Header />
      <Hero />
      {/* <Carasol/> */}
      <BlogSection />
      <NewsSection />
      <Banner />
      <ManuFactures />
      <HeroSection />
      <Footer />
    </div>
  );
};

export default Home;
