import axios from "axios";
import { useSelector } from "react-redux";

const requestData = () => {
  return {
    type: "FIND_ONE_DATA_LOADING",
  };
};

const fetchSuccess = (data) => {
  return {
    type: "FIND_ONE_FETCH_SUCCESS",
    payload: data,
  };
};

const fetchFailed = (data) => {
  return {
    type: "FIND_ONE_FAILED",
    payload: data,
  };
};

// Getting the data from server
export const FindOneFood = (id) => {
  return async (dispatch) => {
    dispatch(requestData());
    try {
      const res = await axios.get(`http://localhost:1337/food-data/${id}`);
      let food = res.data;
      dispatch(fetchSuccess(food));
    } catch (err) {
      dispatch(fetchFailed(err.message));
    }
  };
};

const addItem = (value) => {
  return {
    type: "ADD_ITEM",
    payload: value,
  };
};

const plusQuantity = (value) => {
  return {
    type: "PLUS_QUANTITY",
    payload: value,
  };
};

// Removing when the quantity is less than 1
const removeFromCart = (value) => {
  return {
    type: "ITEM_QUANTITY_LESS_THAN_ONE",
    payload: value,
  };
};

const minusQuantity = (value) => {
  return {
    type: "MINUS_QUANTITY",
    payload: value,
  };
};
// Decreasing quantity or Removing item
export const DecsOrRemove = (value, quantity) => {
  return (dispatch, getState) => {
    const initialState = getState().selectedFootStore;

    let findArray = initialState.selectedFoods.filter(
      (state) => state.id === value.id
    );
    // console.log(findArray[0].count);
    if (quantity >= 1) {
      dispatch(minusQuantity(findArray[0]));
    } else {
      dispatch(removeFromCart(findArray[0]));
    }
    // if (quantity === 0) {

    // }
  };
};

//Adding item to the cart
export const addToTheCart = (value) => {
  return (dispatch, getState) => {
    const newValue = { ...value, count: 1 };

    const initialState = getState().selectedFootStore;

    let CountOrAdd = initialState.selectedFoods.some(
      (state) => state.id == newValue.id
    );

    if (!CountOrAdd) {
      dispatch(addItem(newValue));
    } else {
      dispatch(plusQuantity(value));
    }
  };
};
