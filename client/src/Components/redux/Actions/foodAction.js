import axios from "axios";
import { setSnackbar } from "./snackbarAction";

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
      const res = await axios.get(
        `https://red-onion71.herokuapp.com/food-data/${id}`
      );
      let food = res.data;
      dispatch(fetchSuccess(food));
    } catch (err) {
      dispatch(fetchFailed(err.message));
    }
  };
};

export const addItem = (value) => {
  return {
    type: "ADD_ITEM",
    payload: value,
  };
};

export const plusQuantity = (value) => {
  return {
    type: "PLUS_QUANTITY",
    payload: value,
  };
};

// Removing when the quantity is less than 1
export const removeFromCart = (value) => {
  return {
    type: "ITEM_QUANTITY_LESS_THAN_ONE",
    payload: value,
  };
};

export const minusQuantity = (value) => {
  return {
    type: "MINUS_QUANTITY",
    payload: value,
  };
};

export const orderPlaced = () => {
  return {
    type: "REMOVE_SELECTED_FOODS",
  };
};

// Decreasing quantity or Removing item
// export const DecsOrRemove = (value, quantity) => {
//   return (dispatch, getState) => {
//     const initialState = getState().selectedFootStore;

//     let findArray = initialState.selectedFoods.filter(
//       (state) => state.id === value.id
//     );

//     if (quantity >= 1) {
//       dispatch(minusQuantity(findArray[0]));
//     } else {
//       if (!quantity < 0) {
//         dispatch(setSnackbar(true, "warning", "Item is removed"));

//       }
//     }
//   };
// };

//Adding item to the cart
export const addToTheCart = (value) => {
  return (dispatch, getState) => {
    const newValue = { ...value, count: 1 };

    const initialState = getState().selectedFootStore;

    let CountOrAdd = initialState.selectedFoods.filter(
      (state) => state.id == newValue.id
    );

    if (!CountOrAdd.length > 0) {
      console.log(CountOrAdd);
      dispatch(addItem(newValue));
      dispatch(setSnackbar(true, "success", "Added To Cart"));
    } else {
      dispatch(plusQuantity(value));
      dispatch(
        setSnackbar(
          true,
          "success",
          `${CountOrAdd[0].count} of this item is in cart!`
        )
      );
    }
  };
};
