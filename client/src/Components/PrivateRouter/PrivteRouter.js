import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

export const PrivateRouter = ({ children, ...rest }) => {
  const state = useSelector((state) => state.auth);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        state.isLoggedIn ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};
