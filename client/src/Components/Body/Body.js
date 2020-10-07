import React from "react";
import Footer from "../Footer/Footer";
import WhyYouChooseUs from "../WhyYouChooseUs/WhyYouChooseUs";
import FoodOutPut from "./FoodOutPut/FoodOutPut";
import Header from "./Header/Header";
import Poster from "./Poster/Poster";

const Body = () => {
  return (
    <>
      <Header />
      <Poster />
      <FoodOutPut />
      <WhyYouChooseUs />
      <Footer />
    </>
  );
};

export default Body;
