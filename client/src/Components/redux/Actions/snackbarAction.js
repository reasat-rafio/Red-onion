export const setSnackbar = (snackbarOpen, snackbarType, snackbarMessage) => {
  return {
    type: "SET_SNACKBAR",
    payload: {
      snackbarOpen,
      snackbarType,
      snackbarMessage,
    },
  };
};

export const removeSnackbar = () => {
  return {
    type: "CLEAR_SNACKBAR",
  };
};
