export const login_signUp_Success = (value) => {
  return {
    type: "LOGIN_SIGNUP_SUCCESS",
    payload: value,
  };
};

export const logOut = () => {
  return {
    type: "LOGOUT_SUCCESS",
  };
};
