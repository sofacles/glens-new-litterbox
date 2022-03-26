import React from "react";
import AccountBalance from "./AccountBalance";
import { BankAccountProvider } from "./BankAccountContext";

//Home page wraps the app in provider provided by my Context module.  The module also
// exports the context itself, which will be used by the AccountBalance component.
const HomePage = () => {
  return (
    <BankAccountProvider>
      <div>
        <h2>Home Page</h2>
        <AccountBalance />
      </div>
    </BankAccountProvider>
  );
};

export { HomePage };
