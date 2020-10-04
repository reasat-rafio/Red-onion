import React, { useState } from "react";

import { Button, Grid } from "@material-ui/core";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";

const ShowOneFoodDetails = ({ findOneFood }) => {
  const { img, title } = findOneFood;
  const [newPrice, setNewPrice] = useState(0);
  const [count, setCount] = useState(1);
  const [price, setPrice] = useState(12);

  const [selectedData, setSelectedDAta] = useState([]);

  const handlePLusBtn = () => {
    const newCount = count + 1;
    setCount(newCount);
    const newPPrice = newPrice + price;
    setNewPrice(newPPrice);
  };

  const handleMinusBtn = () => {
    const newCount = count - 1;
    setCount(newCount);
    const newPPrice = newPrice - price;
    setNewPrice(newPPrice);
  };

  const getClickedFood = (product) => {
    // const newFood = [...selectedData, product];
    // setSelectedDAta(newFood);
    // const sameProduct = newFood.filter((pd) => pd.title === product.title);
    // const count = sameProduct.length;
    // addToDatabaseCart(product.title, count);
    // console.log(product.quantity);
  };

  return (
    <Grid className="findOneContainer" container>
      <Grid className="findOneItemDesc" item md={6} xs={12}>
        <div className="FoodDetails-inner">
          <h1>{title}</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum
            fuga quia tempore. Incidunt, fuga rem? Modi voluptatibus tempore
            laborum porro facilis quo incidunt, impedit velit? Necessitatibus
            dolores explicabo aperiam ab? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Blanditiis, maxime nemo? Enim mollitia aliquid,
            quidem est perspiciatis deleniti eius dolores.
          </p>
          <div className="FoodDetails-calculation">
            <h3>${newPrice.toFixed(2)}</h3>
            <form>
              <button className="minus" type="button" onClick={handleMinusBtn}>
                -
              </button>
              <h4>{count}</h4>
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
