export const initialState = {
  findOneFood: {},
  selectedFoods: [],
  total: 0.0,
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
        total: state.total + parseFloat(action.payload.price),
      };
    case "PLUS_QUANTITY":
      const findPlus = state.selectedFoods.filter(
        (f) => f.id === action.payload.id
      );

      findPlus[0].count++;
      let inCartItem = state.inCart;

      return {
        ...state,
        inCart: inCartItem + 1,
        total: state.total + parseFloat(action.payload.price),
      };
    case "MINUS_QUANTITY":
      const findMinus = state.selectedFoods.filter(
        (f) => f.id === action.payload.id
      );
      findMinus[0].count--;
      let inCartMinus = state.inCart;

      return {
        ...state,
        inCart: inCartMinus - 1,
        total: state.total - parseFloat(action.payload.price),
      };
    case "ITEM_QUANTITY_LESS_THAN_ONE":
      // const findRemove = state.selectedFoods.filter(
      //   (f) => f.id === action.payload.id
      // );

      // console.log(findRemove[0].count);
      return {
        ...state,
        total:
          state.total - parseFloat(action.payload.price * action.payload.count),
        inCart: 0,
        selectedFoods: [
          ...state.selectedFoods.filter((f) => f.id !== action.payload.id),
        ],
      };
    case "REMOVE_SELECTED_FOODS":
      return {
        ...state,
        selectedFoods: [],
        inCart: 0,
        total: 0,
      };
    default:
      return state;
  }
};

export default foodReducer;
