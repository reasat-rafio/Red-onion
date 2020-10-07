import React, { useEffect, useState } from "react";

import { Button, Grid } from "@material-ui/core";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";

import { useDispatch, useSelector } from "react-redux";
import {
  addToTheCart,
  DecsOrRemove,
  minusQuantity,
  removeFromCart,
} from "../redux/Actions/foodAction";
import { setSnackbar } from "../redux/Actions/snackbarAction";

const ShowOneFoodDetails = ({ findOneFood }) => {
  // Getting the data from store
  const state = useSelector((state) => state.selectedFootStore);
  const { inCart, selectedFoods, total } = state;
  const dispatch = useDispatch();

  const [totalPrice, setTotalPrice] = useState(0.0);

  const [selectedData, setSelectedDAta] = useState(() =>
    selectedFoods
      ? selectedFoods.filter((food) => findOneFood.id === food.id)
      : false
  );

  const [quantity, setQuantity] = useState(() =>
    selectedData.length > 0 ? selectedData[0].count : 0
  );

  // console.log(selectedFoods);
  useEffect(() => {
    // getting the total bill
    setTotalPrice(total);

    let currentPageFood = selectedFoods.length
      ? selectedFoods.filter((food) => findOneFood.id === food.id)
      : false;
    // console.log(currentPageFood);
    currentPageFood.length > 0 && setQuantity(currentPageFood[0].count);
    currentPageFood.length === 0 && setQuantity(0);

    setSelectedDAta(currentPageFood);
  }, [state]);

  const { img, title, price } = findOneFood;
  // const [newPrice, setNewPrice] = useState(0);

  // Increasing selected food quantity
  const handlePLusBtn = () => {
    dispatch(addToTheCart(findOneFood));
  };
  const [remove, setRemove] = useState(0);

  // Decreasing selected food quantity
  const handleMinusBtn = () => {
    let findArray = state.selectedFoods.filter(
      (state) => state.id === findOneFood.id
    );
    if (quantity === 1) {
      setRemove(1);
    } else {
      setRemove(0);
    }

    // Decreasing the count from the cart
    if (quantity >= 1) {
      dispatch(minusQuantity(findArray[0]));
      dispatch(
        setSnackbar(
          true,
          "info",
          `${findArray[0].count} of this item is in cart!`
        )
      );
    }

    // Removing the item from cart
    if (remove === 1) {
      dispatch(removeFromCart(findArray[0]));
      dispatch(
        setSnackbar(
          true,
          "warning",
          `${findArray[0].title}Item is removed from cart`
        )
      );
    }
  };

  // Adding to the redux store cart
  const getClickedFood = () => {
    dispatch(addToTheCart(findOneFood));
  };

  return (
    <Grid className="findOneContainer" container>
      <Grid className="findOneItemDesc" item md={6} xs={12}>
        <div className="FoodDetails-inner">
          <h1>{title}</h1>
          <h5>Price: ${price}</h5>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum
            fuga quia tempore. Incidunt, fuga rem? Modi voluptatibus tempore
            laborum porro facilis quo incidunt, impedit velit? Necessitatibus
            dolores explicabo aperiam ab? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Blanditiis, maxime nemo? Enim mollitia aliquid,
            quidem est perspiciatis deleniti eius dolores.
          </p>

          <div className="FoodDetails-calculation">
            <h3 className="total_bill">Total bill: ${totalPrice.toFixed(2)}</h3>
            <form>
              <button className="minus" type="button" onClick={handleMinusBtn}>
                -
              </button>
              <h4>{quantity}</h4>
              <button onClick={handlePLusBtn} type="button" className="plus">
                +
              </button>
            </form>
          </div>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => getClickedFood()}
            className="FoodDetails-icon-btn"
          >
            <ShoppingCartOutlinedIcon fontSize="small" /> Add
          </Button>
        </div>
      </Grid>
      <Grid className="findOneItemImg" item md={6} xs={12}>
        <img src={img} alt="img" />
      </Grid>
    </Grid>
  );
};

export default ShowOneFoodDetails;
