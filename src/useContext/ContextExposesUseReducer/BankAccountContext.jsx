import React, { useReducer } from "react";
import { login, logout } from "./BankService";

const myAccount = {
  balance: 0,
  firstName: "Unset",
  isLoggedIn: false,
  lastName: "Unset",
};

export const BankAccountContext = React.createContext([myAccount]);

function bankReducer(state, action) {
  const { cargo } = action;
  switch (action.type) {
    case "login":
      const accountInfo = login(cargo.firstName, cargo.lastName);
      return accountInfo;
    case "logout":
      const loggedOutState = logout();
      return loggedOutState;
    default:
      throw new Error(`bankReducer can't deal with type: ${action.type}`);
  }
}

//What do I expose?  Dispatch? The reducer?  I'll try dispatch first.
export const BankAccountProvider = ({ children }) => {
  const [accountState, dispatch] = useReducer(bankReducer, myAccount);

  return (
    <BankAccountContext.Provider value={[accountState, dispatch]}>
      {children}
    </BankAccountContext.Provider>
  );
};
