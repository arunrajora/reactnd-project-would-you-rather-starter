import React from "react";
import { Redirect, Route } from "react-router";

const PrivateRoute = ({ isAuthenticated, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { ...props.location }
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
