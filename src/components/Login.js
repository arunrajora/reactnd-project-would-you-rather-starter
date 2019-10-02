import React from "react";
import { Redirect } from "react-router";

const Login = ({ users, authenticateUser, isAuthenticated, location }) =>
  isAuthenticated ? (
    <Redirect to={location.state || "/"} />
  ) : (
    <div>
      <h2>Login</h2>
      {users.map(({ id, name, avatarURL }) => (
        <button
          key={id}
          onClick={() => {
            authenticateUser(id);
          }}
        >
          {name}
        </button>
      ))}
    </div>
  );

export default Login;
