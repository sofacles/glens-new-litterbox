import React, { useContext } from "react";
import { Avatar } from "./Avatar";
import AccountBalance from "./AccountBalance";
import { BankAccountContext } from "./BankAccountContext";

export const AccountPage = () => {
  const { accountState, dispatch } = useContext(BankAccountContext);
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
        isLoggedIn={accountState.isLoggedIn}
        login={doLogin}
        logout={doLogout}
        userName={accountState.isLoggedIn ? accountState.firstName : "Unset"}
      />
      {accountState.isLoggedIn && <AccountBalance />}
    </div>
  );
};
