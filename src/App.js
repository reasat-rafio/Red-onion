import React from "react";
import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import Body from "./Components/Body/Body";
import { ThemeProvider } from "@material-ui/core";
import { theme } from "./Components/CustomeMuiTheme/MUItheme";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Switch>
          <Route exact path="/" component={Body} />
        </Switch>
      </ThemeProvider>
    </>
  );
}

export default App;
