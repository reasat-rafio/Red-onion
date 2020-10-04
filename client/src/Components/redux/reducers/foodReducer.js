export const initialState = {
  findOneFood: {},
  selectedFoods: [],
  total: 0,
  loading: true,
  error: "",
  inCart: 0,
};

export const foodReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FIND_ONE_DATA_LOADING":
      return {
        ...state,
        loading: true,
      };
    case "FIND_ONE_FETCH_SUCCESS":
      return {
        ...state,
        findOneFood: action.payload,
        loading: false,
        selectedFoods: [...state.selectedFoods],
      };
    case "FIND_ONE_FAILED":
      return {
        ...state,
        findOneFood: [],
        loading: false,
        error: action.payload,
      };
    case "ADD_ITEM":
      let inCartItems = state.inCart;
      return {
        ...state,
        selectedFoods: [...state.selectedFoods, action.payload],
        inCart: inCartItems + 1,
      };
    case "PLUS_QUANTITY":
      const find = state.selectedFoods.filter(
        (f) => f.id === action.payload.id
      );

      find[0].count++;
      console.log(find[0].count);
      let inCartItem = state.inCart;

      return {
        ...state,
        inCart: inCartItem + 1,
        selectedFoods: [...state.selectedFoods, find],
      };
    default:
      return state;
  }
};

export default foodReducer;
