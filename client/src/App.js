import React from "react";
import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import Body from "./Components/Body/Body";
import { ThemeProvider } from "@material-ui/core";
import { theme } from "./Components/CustomeMuiTheme/MUItheme";
import { Provider } from "react-redux";

import ShowOneFood from "./Components/ShowOneFood/ShowOneFood";
import { PersistGate } from "redux-persist/integration/react";
import { store, persist } from "./Components/redux/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persist}>
          <ThemeProvider theme={theme}>
            <Switch>
              <Route exact path="/" component={Body} />
              <Route path="/category/:id" component={ShowOneFood} />
            </Switch>
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
