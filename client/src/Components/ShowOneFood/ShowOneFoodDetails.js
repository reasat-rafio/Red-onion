import React, { useEffect, useState } from "react";

import { Button, Grid } from "@material-ui/core";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";

import { useDispatch, useSelector } from "react-redux";
import { addToTheCart, DecsOrRemove } from "../redux/Actions/foodAction";

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

  // Decreasing selected food quantity
  const handleMinusBtn = () => {
    if (quantity < 0) return;
    dispatch(DecsOrRemove(findOneFood, quantity));
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
