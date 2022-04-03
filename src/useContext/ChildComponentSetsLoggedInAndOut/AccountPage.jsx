import React, { useContext } from "react";
import { Avatar } from "./Avatar";
import AccountBalance from "./AccountBalance";
import { BankAccountContext } from "./BankAccountContext";
import { login, logout } from "./BankService";

export const AccountPage = () => {
  const [state, setState] = useContext(BankAccountContext);

  const doLogin = () => {
    //Try to log in with the BankService
    const accountInfo = login("James", "Vesuvius");

    //Now pass this accountState to BankAccountContext
    setState(accountInfo);
  };

  const doLogout = () => {
    const loggedOutState = logout();
    setState(loggedOutState);
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
