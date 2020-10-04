import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFoodData } from "../../redux/Actions/fetchAction";
import Loading from "../../Loading/Loading";
import SectionName from "./SectionName";

const FoodOutPut = () => {
  //API request from redux
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchFoodData());
  }, []);

  // getting the data from redux store
  const storeData = useSelector((state) => state);

  // Setting the data to a state
  //   const [lunch, setLunch] = useState([]);
  const lunch = useRef([]);
  const [foodItems, setFoodItems] = useState([]);
  useEffect(() => {
    setFoodItems(...storeData.foods);
  }, [storeData]);

  // Setting the state based on what category is selected
  const [category, setCategory] = useState("lunch");

  const [selectedCategoryItems, setSelectedCategoryItems] = useState([]);

  const changeCategory = (value) => {
    setSelectedCategoryItems(
      foodItems.filter((item) => item.categories[0].category === category)
    );

    setCategory(value);
  };
  console.log(selectedCategoryItems);

  return (
    <div>
      <SectionName category={category} changeCategory={changeCategory} />
      {!foodItems ? <Loading /> : foodItems.map((items) => {})}
    </div>
  );
};

export default FoodOutPut;
