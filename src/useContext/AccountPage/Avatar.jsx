import React, { useEffect, useRef, useState } from "react";

//Show a login/logout button and the user name
const Avatar = (props) => {
  const { isLoggedIn = false, login, logout, userName } = props;

  return (
    <div data-testid="login">
      <h3 data-testid="user-n-span">{userName}</h3>
      <button
        onClick={(evt) => {
          if (isLoggedIn) {
            logout();
          } else {
            login("Milan", "Vesuvius");
          }
        }}
        data-testid="login-button"
      >
        {isLoggedIn ? "Log out" : "Log in"}
      </button>
    </div>
  );
};

export { Avatar };
