import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Body from "./Components/Body/Body";
import { ThemeProvider } from "@material-ui/core";
import { theme } from "./Components/CustomeMuiTheme/MUItheme";
import { Provider } from "react-redux";

import ShowOneFood from "./Components/ShowOneFood/ShowOneFood";
import { PersistGate } from "redux-persist/integration/react";
import { store, persist } from "./Components/redux/store";
import SnackbarPopUp from "./Components/Snackbar/Snackbar";
import Review from "./Components/Review/Review";
import Login from "./Components/Login&SignUp/Login";
import SignUp from "./Components/Login&SignUp/Signup";
import { PrivateRouter } from "./Components/PrivateRouter/PrivteRouter";
import EndPage from "./Components/EndPage/EndPage";

function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persist}>
          <ThemeProvider theme={theme}>
            <SnackbarPopUp />
            <Router>
              <Switch>
                <Route exact path="/" component={Body} />
                <Route path="/category/:id" component={ShowOneFood} />
                <Route path="/review" component={Review} />
                <Route path="/login" component={Login} />
                <Route path="/signup" component={SignUp} />
                <PrivateRouter path="/delivery">
                  <EndPage />
                </PrivateRouter>
              </Switch>
            </Router>
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
