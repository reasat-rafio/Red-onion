import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../Footer/Footer";
import { setSnackbar } from "../redux/Actions/snackbarAction";
import WhyYouChooseUs from "../WhyYouChooseUs/WhyYouChooseUs";
import FoodOutPut from "./FoodOutPut/FoodOutPut";
import Header from "./Header/Header";
import Poster from "./Poster/Poster";

const Body = () => {
  const state = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [time, setTimer] = useState(false);

  setTimeout(() => {
    setTimer(true);
    if (!state.isLoggedIn) {
      dispatch(
        setSnackbar(
          true,
          "info",
          `You have to login to place a order. Click on the profile icon to login or signup`
        )
      );
    } else {
      return;
    }
  }, 4000);

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
