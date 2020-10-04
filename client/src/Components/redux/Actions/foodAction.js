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

export const minusQuantity = () => {
  return {
    type: "MINUS_QUANTITY",
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
    // console.log(CountOrAdd);
    if (!CountOrAdd) {
      dispatch(addItem(newValue));
    } else {
      dispatch(plusQuantity(value));
    }
  };
};
