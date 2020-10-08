import axios from "axios";

const requestData = () => {
  return {
    type: "FETCH_DATA_LOADING",
  };
};

const fetchSuccess = (data) => {
  return {
    type: "FETCH_SUCCESS",
    payload: data,
  };
};

const fetchFailed = (data) => {
  return {
    type: "FETCH_FAILED",
    payload: data,
  };
};

export const fetchFoodData = () => {
  return async (dispatch) => {
    dispatch(requestData());
    try {
      const res = await axios.get(
        "https://red-onion71.herokuapp.com/food-data"
      );
      let foods = res.data;
      dispatch(fetchSuccess(foods));
    } catch (err) {
      dispatch(fetchFailed(err.message));
    }
  };
};
