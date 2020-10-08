const initialState = {
  isLoggedIn: false,
  token: "",
  userName: "",
  email: "",
};

export const userFormReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_SIGNUP_SUCCESS":
      console.log(action.payload);
      return {
        ...state,
        isLoggedIn: true,
        userName: action.payload.username,
        email: action.payload.email,
        token: action.payload.token,
      };
    case "LOGOUT_SUCCESS":
      return {
        ...state,
        isLoggedIn: false,
        userName: "",
        email: "",
        token: "",
      };
    default:
      return state;
  }
};
