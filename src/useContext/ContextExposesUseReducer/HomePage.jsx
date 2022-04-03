import React from "react";
import { AccountPage } from "./AccountPage";
import { BankAccountProvider } from "./BankAccountContext";

/**
 * See how BankAccountContext exposes a state object and the _dispatch_ method of the return from a local useReducer
 */

const HomePage = () => {
  return (
    <BankAccountProvider>
      <div>
        <h2>Home Page</h2>
        <AccountPage />
      </div>
    </BankAccountProvider>
  );
};

export { HomePage };
