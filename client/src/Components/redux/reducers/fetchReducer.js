const initialState = {
  foods: [],
  loading: false,
  error: "",
};

export const fetchReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_DATA_LOADING":
      return {
        ...state,
        loading: true,
      };
    case "FETCH_SUCCESS":
      return {
        ...state,
        foods: [action.payload],
        loading: false,
      };
    case "FETCH_FAILED":
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};
