import React from "react";
import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import Body from "./Components/Body/Body";
import { ThemeProvider } from "@material-ui/core";
import { theme } from "./Components/CustomeMuiTheme/MUItheme";
import { Provider } from "react-redux";
import store from "./Components/redux/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Switch>
            <Route exact path="/" component={Body} />
          </Switch>
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default App;
