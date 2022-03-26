import React, { useContext, useState } from "react";
import { Avatar } from "./Avatar";
import AccountBalance from "./AccountBalance";
import { BankAccountContext } from "./BankAccountContext";
import { login, logout } from "./BankService";

export const AccountPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [state, setState] = useContext(BankAccountContext);

  const doLogin = () => {
    const accountInfo = login("Milan", "Vesuvius");
    if (accountInfo?.isLoggedIn) {
      setState(accountInfo);
      setIsLoggedIn(true);
    }
    //Now pass this accountState to BankAccountContext
    setState(accountInfo);
  };

  const doLogout = () => {
    setState({ ...state, isLoggedIn: false });
    logout();
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
