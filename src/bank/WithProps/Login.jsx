import React from "react";

const Login = (props) => {
  const { isLoggedIn, userName } = props;
  return (
    <div data-testid="login">
      <span>{userName}</span>
      <span data-testid="login-label">{isLoggedIn ? "Log out" : "Log in"}</span>
    </div>
  );
};

export { Login };
