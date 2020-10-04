import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFoodData } from "../../redux/Actions/fetchAction";
import Loading from "../../Loading/Loading";
import SectionName from "./SectionName";
import { Data } from "./DefaultData";
import ItemsGrid from "./ItemsGrid/ItemsGrid";
import { Grid } from "@material-ui/core";

const FoodOutPut = () => {
  //API request from redux
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchFoodData());
  }, []);

  // getting the data from redux store
  const storeData = useSelector((state) => state.fetch);

  // Setting the data to a state

  const [foodItems, setFoodItems] = useState([]);
  useEffect(() => {
    setFoodItems(...storeData.foods);
  }, [storeData]);

  // Setting the state based on what category is selected
  const [category, setCategory] = useState("lunch");

  const [selectedCategoryItems, setSelectedCategoryItems] = useState([...Data]);

  const changeCategory = (value) => {
    setCategory(value);
    setSelectedCategoryItems(
      foodItems.filter((item) => item.category === value)
    );
  };

  return (
    <div>
      <SectionName category={category} changeCategory={changeCategory} />
      <Grid container>
        <Grid item xs={false} md={1} />
        <Grid
          justify="center"
          md={10}
          className="foodGrid"
          container
          item
          spacing={1}
          xs={12}
        >
          {!selectedCategoryItems ? (
            <Loading />
          ) : (
            selectedCategoryItems.map((items) => (
              <ItemsGrid key={items.id} id={items.id} items={items} />
            ))
          )}
        </Grid>
        <Grid item xs={false} md={1} />
      </Grid>
    </div>
  );
};

export default FoodOutPut;
