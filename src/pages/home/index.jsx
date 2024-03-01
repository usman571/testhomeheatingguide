import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import Header from "../../components/Header";
import BlogSection from "./BlogSection";
import NewsSection from "./NewsSection";
import Footer from "../../components/Footer";
import Banner from "../../components/Banner";
import HeroSection from "./Quote";
import Hero from "./Hero";
import ManuFactures from "./ManuFactures";
import Carasol from "./Carasol";
import GenerateToken from "../../components/GenerateToken";

const Home = () => {
  return (
    <div className=" w-full max-h-[3457px] mx-auto">
      <Header />
      <Hero />
      {/* <GenerateToken/> */}
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
