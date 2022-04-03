import React, { useContext } from "react";
import { Avatar } from "./Avatar";
import AccountBalance from "./AccountBalance";
import { BankAccountContext } from "./BankAccountContext";

export const AccountPage = () => {
  const [state, dispatch] = useContext(BankAccountContext);
  const doLogin = () => {
    dispatch({
      type: "login",
      cargo: { firstName: "James", lastName: "Vesuvius" },
    });
  };

  const doLogout = () => {
    dispatch({ type: "logout" });
  };

  return (
    <div>
      <Avatar
        isLoggedIn={state.isLoggedIn}
        login={doLogin}
        logout={doLogout}
        userName={state.isLoggedIn ? state.firstName : "Unset"}
      />
      {state.isLoggedIn && <AccountBalance />}
    </div>
  );
};
