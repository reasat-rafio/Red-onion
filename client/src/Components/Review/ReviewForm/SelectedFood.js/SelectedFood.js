import React, { useEffect, useState } from "react";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { Button, IconButton } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  minusQuantity,
  plusQuantity,
  removeFromCart,
} from "../../../redux/Actions/foodAction";
import { setSnackbar } from "../../../redux/Actions/snackbarAction";

const SelectedFood = ({ fd, inCart }) => {
  // Getting the data from the redux store
  const state = useSelector((state) => state.selectedFootStore);
  const dispatch = useDispatch();
  const { count, img, text, title, price } = fd;
  // Counting from count section
  const itemPrice = count * parseFloat(price);

  const [quantity, setQuantity] = useState(count);
  useEffect(() => {
    setQuantity(count);
  }, [state]);
  const plusItem = () => {
    dispatch(plusQuantity(fd));
  };

  const [remove, setRemove] = useState(0);
  const minusItem = () => {
    if (quantity === 1) {
      setRemove(1);
    } else {
      setRemove(0);
    }

    if (quantity >= 1) {
      dispatch(minusQuantity(fd));
    }
    if (remove === 1) {
      dispatch(removeFromCart(fd));
      dispatch(setSnackbar(true, "warning", `${title}  is removed from cart`));
    }
  };

  const removeItem = () => {
    dispatch(removeFromCart(fd));
    dispatch(setSnackbar(true, "warning", ` ${title} is removed from cart`));
  };

  return (
    <div className="cart-details">
      <img src={img} alt="img" />
      <div className="cart-details-price">
        <p className="title">{title}</p>
        <p>{itemPrice.toFixed(2)}</p>
        <small>Delivery Free</small>
      </div>
      <div className="btn-details-price">
        <IconButton onClick={minusItem}>
          <button>-</button>
        </IconButton>
        <p>{quantity}</p>
        <IconButton onClick={plusItem}>
          <button>+</button>
        </IconButton>
      </div>
      <IconButton onClick={removeItem} className="details-price-icon">
        <DeleteForeverIcon color="secondary" />
      </IconButton>
    </div>
  );
};

export default SelectedFood;
