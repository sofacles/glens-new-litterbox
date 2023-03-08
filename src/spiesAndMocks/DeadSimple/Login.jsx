import React from "react";

const Login = () => {
  const isLoggedIn = false;
  return (
    <div data-testid="login">
      <span>Barb</span>
      <span data-testid="login-label">{isLoggedIn ? "Log out" : "Log in"}</span>
    </div>
  );
};

export { Login };
