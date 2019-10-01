import React from "react";
import { Redirect } from "react-router";

const Login = ({ users, authenticateUser, isAuthenticated, location }) =>
  isAuthenticated ? (
    <Redirect to={location.state || "/"}/>
  ) : (
    users.map(({ id, name, avatarURL }) => (
      <button
        key={id}
        onClick={() => {
          authenticateUser(id);
        }}
      >
        {name}
      </button>
    ))
  );

export default Login;
