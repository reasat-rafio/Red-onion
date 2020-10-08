import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFoodData } from "../../redux/Actions/fetchAction";
import Loading from "../../Loading/Loading";
import SectionName from "./SectionName";
import { Data } from "./DefaultData";
import ItemsGrid from "./ItemsGrid/ItemsGrid";
import { Grid, Button } from "@material-ui/core";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import { setSnackbar } from "../../redux/Actions/snackbarAction";

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

  // Checkout button action
  const state = useSelector((state) => state.selectedFootStore);
  const { inCart } = state;
  const [Cart, setInCart] = useState(inCart);
  useEffect(() => {
    setInCart(inCart);
  }, [state]);

  const checkOutBtn = () => {
    if (!Cart == 0) {
      window.location.pathname = "/review";
    } else {
      dispatch(setSnackbar(true, "error", "Your Cart Is Empty"));
    }
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
          <Button
            onClick={checkOutBtn}
            className="checkout_btn"
            color="secondary"
            variant="contained"
          >
            <ShoppingCartOutlinedIcon /> Checkout Your Food
          </Button>
        </Grid>
        <Grid item xs={false} md={1} />
      </Grid>
    </div>
  );
};

export default FoodOutPut;
